<!--查询-->
<template>
    <div class="query">
          <ul class="query-form">
              <li>
                  <div>年级：</div>
                  <div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
              </li>
              <li>
                  <div>年级：</div>
                  <div>
                      <el-select v-model="value" placeholder="请选择">
                          <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                          </el-option>
                      </el-select>
                  </div>
              </li>
          </ul>
    </div>
</template>

<script>
    export default {
        name: "query",
        data(){
            return{
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }],
                value: ''
            }
        }
    }
</script>

<style scoped>
    .query-form{
        display: flex;
    }
    .query-form>li{
        display: flex;
       /* height: 74px;
        line-height: 74px;*/
        padding: 20px 0px;
        margin-right: 18px;
    }
    .query-form>li>div:nth-child(1){
       line-height: 36px;
    }
</style>
