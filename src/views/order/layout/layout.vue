<!-- 预约系统layout -->
<template>
	<div id="layout">
		<fy-head></fy-head>
		<div class="main">
			<div class="main-middle" :style="{ paddingLeft : toggleWidth }">
				<el-scrollbar :native="false">
					<router-view></router-view>
				</el-scrollbar>
			</div>
			<div class="main-left" :style="{ width : toggleWidth }">
				<fy-nav ref="leftNav" :menuData1="menuData1"></fy-nav>
			</div>
		</div>
	</div>
</template>

<script>
import TopHead from '../../../components/head'
import LeftNav from '../../../components/nav'
export default {
    name: 'layout',
    data() {
        return {
            toggleWidth: '240px',
            menuData1: [{
                menu_id: 1,
                menu_text: '首页',
                menu_icon: 'icon-home',
                menu_href: '/order/Layout/index',
                menu_pid: 0,
                menu_target_type: 0
            }, {
                menu_id: 2,
                menu_text: '预约',
                menu_icon: 'icon-attendanceStatistics',
                menu_href: '',
                menu_pid: 0,
                menu_target_type: 0
            }, {
                menu_id: 3,
                menu_text: '课程预约',
                menu_icon: '',
                menu_href: '/order/Layout/course-order',
                menu_pid: 2,
                menu_target_type: 0
            }, {
                menu_id: 4,
                menu_text: '会议预约',
                menu_icon: '',
                menu_href: '',
                menu_pid: 2,
                menu_target_type: 0
            }, {
                menu_id: 5,
                menu_text: '我的',
                menu_icon: 'icon-user',
                menu_href: '/order/Layout/my',
                menu_pid: 0,
                menu_target_type: 0
            }, {
                menu_id: 6,
                menu_text: '查询',
                menu_icon: 'icon-search-1',
                menu_href: '',
                menu_pid: 0,
                menu_target_type: 0
            }, {
                menu_id: 7,
                menu_text: '课程查询',
                menu_icon: '',
                menu_href: '/order/Layout/course-search',
                menu_pid: 6,
                menu_target_type: 0
            }, {
                menu_id: 8,
                menu_text: '会议查询',
                menu_icon: '',
                menu_href: '',
                menu_pid: 6,
                menu_target_type: 0
            }, {
                menu_id: 9,
                menu_text: '设置',
                menu_icon: 'icon-setup',
                menu_href: '/order/Layout/setting',
                menu_pid: 0,
                menu_target_type: 0
            }]
        }
    },
    components: {
        'fy-head': TopHead,
        'fy-nav': LeftNav,
        // 'fy-note': note
    }
}
</script>

<style lang="scss" scoped="scoped">
	.main {
		height: calc(100% - 60px);
		overflow: hidden;
	}

	.main-middle {
		height: 100%;
		width: 100%;
		background: #ffffff;
		float: left;
		padding-left: 240px;
		// overflow: auto;
		position: relative;
	}
	
	.main-middle>.el-scrollbar {
		height: 100%;
	}

	#layout {
		height: 100%;
	}

	.main-left {
		height: 100%;
		width: 240px;
		float: left;
		margin-left: -100%;
		background: #f9f9fb;
		border-right: 1px solid #e5e7ef;
		position: relative;
	}

	.main-iframe {
		width: 100%;
		background-color: #ffffff;
		height: 100%;
	}
</style>
