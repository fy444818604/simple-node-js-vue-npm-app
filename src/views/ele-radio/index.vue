<template>
    <div class="page-container" id="">
        <div class="fy-page-title">Radio 单选框</div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        基础用法
                    </div>
                    <div class="box-title-explain">
                        由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
                    </div>
                    <div class="box-panel">
                        <el-radio v-model="radio" label="1">备选项</el-radio>
                        <el-radio v-model="radio" label="2">备选项</el-radio>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        禁用状态
                    </div>
                    <div class="box-title-explain">
                        单选框不可用的状态。
                    </div>
                    <div class="box-panel">
                        <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
                        <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        按钮样式
                    </div>
                    <div class="box-title-explain">
                        按钮样式的单选组合。
                    </div>
                    <div class="box-panel">
                        <div>
                            <el-radio-group v-model="radio3">
                                <el-radio-button label="上海"></el-radio-button>
                                <el-radio-button label="北京"></el-radio-button>
                                <el-radio-button label="广州"></el-radio-button>
                                <el-radio-button label="深圳"></el-radio-button>
                            </el-radio-group>
                        </div>
                        <div style="margin-top: 20px">
                            <el-radio-group v-model="radio4" size="medium">
                                <el-radio-button label="上海" ></el-radio-button>
                                <el-radio-button label="北京"></el-radio-button>
                                <el-radio-button label="广州"></el-radio-button>
                                <el-radio-button label="深圳"></el-radio-button>
                            </el-radio-group>
                        </div>
                        <div style="margin-top: 20px">
                            <el-radio-group v-model="radio5" size="small">
                                <el-radio-button label="上海"></el-radio-button>
                                <el-radio-button label="北京" disabled ></el-radio-button>
                                <el-radio-button label="广州"></el-radio-button>
                                <el-radio-button label="深圳"></el-radio-button>
                            </el-radio-group>
                        </div>
                        <div style="margin-top: 20px">
                            <el-radio-group v-model="radio6" disabled size="mini">
                                <el-radio-button label="上海"></el-radio-button>
                                <el-radio-button label="北京"></el-radio-button>
                                <el-radio-button label="广州"></el-radio-button>
                                <el-radio-button label="深圳"></el-radio-button>
                            </el-radio-group>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        带有边框
                    </div>
                    <div class="box-panel">
                        <div>
                            <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
                            <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
                        </div>
                        <div style="margin-top: 20px">
                            <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
                            <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
                        </div>
                        <div style="margin-top: 20px">
                            <el-radio-group v-model="radio9" size="small">
                                <el-radio label="1" border>备选项1</el-radio>
                                <el-radio label="2" border disabled>备选项2</el-radio>
                            </el-radio-group>
                        </div>
                        <div style="margin-top: 20px">
                            <el-radio-group v-model="radio10" size="mini" disabled>
                                <el-radio label="1" border>备选项1</el-radio>
                                <el-radio label="2" border>备选项2</el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <marquee behavior="alertnate" direction="up" bgcolor="#3b8bff" width="300" height="200" hspace="50"  vspace="50" scrollamount="10" scrolldelay="30" onmouseover=this.stop() onmouseout=this.start()>
                <ul>
                    <li v-for="item in 5">{{item}}</li>
                </ul>
            </marquee>
        </div>
    </div>
</template>

<script>
 export default {
    data () {
      return {
        radio: '1',
        radio1: '选中且禁用',
          radio3: '上海',
          radio4: '上海',
          radio5: '上海',
          radio6: '上海',
          radio7: '1',
          radio8: '1',
          radio9: '1',
          radio10: '1'
      };
    }
  }
</script>

<style lang="scss" scoped>

</style>