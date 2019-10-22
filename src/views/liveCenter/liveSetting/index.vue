<!--直播设置-->
<template>
  <div class="live-setting">
    <div class="title">
      直播设置
      <div class="btn-lists">
        <btn-list :model="{icon:'icon-add',name:'添加'}"></btn-list>
        <btn-list :model="{icon:'icon-del',name:'删除'}"></btn-list>
      </div>
    </div>
    <div class="container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column align="center" width="100" prop="order" label="序号"></el-table-column>
        <el-table-column align="center" width="100" label="直播名称">
          <template slot-scope="scope">
            <span style="color:#4A80F6">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="watch_address" label="直播观看地址"></el-table-column>
        <el-table-column align="center" prop="push_address" label="推流地址"></el-table-column>
        <el-table-column align="center" width="100" prop="create_way" label="创建方式"></el-table-column>
        <el-table-column align="center" prop="status" label="状态"></el-table-column>
        <el-table-column align="center" width="150" label="是否开启">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.is_open" active-color="#4A80F6" inactive-color="#ccc"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="60">
          <template slot-scope="scope">
            <div class="control" @mouseenter="scope.row.show = true" @mouseleave="scope.row.show = false">
              <div v-if="scope.row.show" class="control-item">
                <div>查看</div>
                <div>编辑</div>
                <div>删除</div>
              </div>
              <i v-else class="iconfont icon-more"></i>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    btnList: () => import("@/components/btn-list")
  },
  data() {
    return {
      tableData: [
        {
          order: 1,
          name: "直播间2",
          watch_address: "http://192.168.10.200",
          push_address: "rtmp://192.168.1.100",
          create_way: "手动创建",
          status: "直播中",
          is_open: true,
          show:false
        },
                {
          order: 1,
          name: "直播间2",
          watch_address: "http://192.168.10.200",
          push_address: "rtmp://192.168.1.100",
          create_way: "手动创建",
          status: "直播中",
          is_open: true,
          show:false
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.live-setting {
  padding: 32px;
  min-height: 100%;
  height: 100%;
}
.live-setting .title {
  position: relative;
  line-height: 1;
  .btn-lists {
    position: absolute;
    right: 0;
    top: 0;
  }
}
.container {
  margin-top: 23px;
  height: calc(100% - 37px);
  background: #fff;
  border-radius: 6px;
  padding: 24px;
}

.control {
  .control-item {
    position: absolute;
    height: 48px;
    width: 176px;
    right: 0;
    top: 0;
    background: #d1e9ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    & > div {
      cursor: pointer;
      color: #787D82;
    }
    & > div:nth-child(2) {
      color: #4A80F6;
    }
  }
}
</style>