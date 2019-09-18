<!--状态切换（启用0/停用1/全部）-->
<template>
    <div class="state-switch">
        <ul>
            <li v-for="(item,index) in switchList" :class="activeClass == index ? 'active':''" :key="index" @click="switchState(index,item)">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "state-switch",
        data(){
            return{
                switchList:[
                    {
                        name:'启用',
                        state:0
                    },
                    {
                        name:'停用',
                        state:1
                    },
                    {
                        name:'全部',
                        state:''
                    }
                ],
                activeClass:0
            }
        },
        methods: {
            switchState(index,item) {
                var that = this;
                that.activeClass = index;
                that.$emit('switchL',item.state)
            },
        }
    }
</script>

<style scoped>
    .state-switch>ul{
        display: flex;
        width: 132px;
        border: 2px solid #BABABA;
        background: #BABABA;
        height: 24px;
        border-radius: 22px;
    }
    .state-switch>ul>li{
          width: 33.333%;
          border-radius: 22px;
          text-align: center;
          color: #ffffff;
    }
    .state-switch>ul>li:hover{
       cursor: pointer;
    }
    .state-switch>ul>.active{
        background:#fff;
        color: #898888;
    }
</style>
