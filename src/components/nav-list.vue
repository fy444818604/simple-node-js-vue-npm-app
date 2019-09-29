<!-- 菜单单个对象组件 -->
<template>
	<li :class="[open&&isFolder?'open':'',link&&!isFolder?'link':'',hover?'hover':'']">
		<a @click="toggle">
			<i class="iconfont" :class="[model.menu_icon,open&&isFolder?'active':'']"></i>
			<span class="menu-name">{{ model.menu_text }}</span>
			<i class="iconfont menu-arrow icon-arrow-down" v-show="iconShow"></i>
		</a>
		<ul v-show="open" v-if="isFolder && expend">
			<navItem class="site-menu-sub" v-for="(model, index) in model.children" :key="index" :model="model" :expend="expend"
			 :firstpage="firstpage" :num="num + 1" v-bind='$attrs' v-on="$listeners">
			</navItem>
		</ul>
	</li>
</template>

<script>
import '../assets/style/menu.scss'
import router from '../router'
export default {
    name: 'navItem',
    props: {
        model: Object,
        expend: Boolean,
        firstpage: String,
        num: Number
    },
    data() {
        if (this.$root.$children[0] == this) {
            return {
                open: false,
                link: false,
                hover: true
            }
        }
        if (this.model.menu_href == this.firstpage) {
            return {
                open: false,
                link: true,
                hover: false
            }
        }
        return {
            open: false,
            link: false,
            hover: false
        }
    },
    watch:{
        firstpage(){
				
        }
    },
    computed: {
        isFolder() {
            return this.model.children &&
					this.model.children.length
        },
        iconShow() {
            if (this.expend) {
                if (this.isFolder) {
                    return true
                }
            } else {
                if (this.model.menu_icon) {
                    return false
                } else {
                    if (this.isFolder) {
                        return true
                    }
                }
            }
        }
    },
    mounted() {
			
    },
    methods: {
        toggle() {
            if (this.model.menu_href) {
                if (this.model.menu_target_type) {
                    if (this.model.menu_pid != 0 && !this.expend) {
                        this.searchFather(this)
                    }
                    window.open(this.model.menu_href)
                } else {
                    if (this.model.menu_pid != 0 && !this.expend) {
                        this.searchFather(this)
                    }
                    this.clearHover();
                    this.searchFatherHover(this);
                    this.$emit('jump',this.model.menu_href)
                    this.changeType(this.$root.$children);
                    this.link = true;
                }
            } else {
                if (this.isFolder) {
                    if (this.open) {
                        this.open = false
                    } else {
                        for (let i = 0; i < this.$parent.$children.length; i++) {
                            this.$parent.$children[i].open = false
                        }
                        this.open = true
                    }
                } else {
                    this.changeType(this.$root.$children);
                    this.link = true;
                }
            }
        },
        changeType(para) {
            for (let i = 0; i < para.length; i++) {
                if (para[i].$children.length != 0) {
                    this.changeType(para[i].$children)
                } else {
                    para[i].link = false
                }
            }
        },
        searchFather(para) {
            if (para.$parent != para.$root) {
                this.searchFather(para.$parent)
            } else {
                para.open = false
            }
        },
        searchFatherHover(para) {
            if (para.$parent != para.$root) {
                this.searchFatherHover(para.$parent)
            } else {
                para.hover = true
            }
        },
        clearHover() {
            for (let i in this.$root.$children) {
                this.$root.$children[i].hover = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
	
	.iconfont {
		font-size: 20px;
	}

	.icon-arrow-down {
		font-size: 16px;
	}

</style>
