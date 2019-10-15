<template>
	<div id="layout">
		<index-head></index-head>
    <div class="container">
      <div class="nav-wrap">
        <personNav></personNav>
      </div>
      <el-scrollbar>
        <router-view></router-view>
      </el-scrollbar>
    </div>

	</div>
</template>

<script>
import head from '../../../components/index-head'
import personNav from '../../../components/person-nav'
export default {
    data() {
        return {

        }
    },
    components: {
        'index-head': head,
        personNav
    }
}
</script>

<style lang="scss" scoped="scoped">
.container {
  height: calc(100vh - 60px);
  display: flex;
  background: #F5F7FB;
  .nav-wrap {
    width: 240px;
    flex-shrink: 0;
  }
}
</style>
