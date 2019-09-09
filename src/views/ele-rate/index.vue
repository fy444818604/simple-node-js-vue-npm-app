<template>
    <div class="page-container" id="ele-rate">
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        基础用法
                    </div>
                    <div class="box-panel">
                        <el-row>
                            <el-col :span="12">
                                <el-rate v-model="value1"></el-rate>
                            </el-col>
                            <el-col :span="12">
                                <el-rate
                                        v-model="value2"
                                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                                </el-rate>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        辅助文字
                    </div>
                    <div class="box-panel">
                        <el-rate
                                v-model="value3"
                                show-text>
                        </el-rate>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        其它icon
                    </div>
                    <div class="box-panel">
                        <el-rate
                                v-model="value4"
                                :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
                                void-icon-class="icon-rate-face-off"
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                        </el-rate>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        只读
                    </div>
                    <div class="box-panel">
                        <el-rate
                                v-model="value5"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">
                        </el-rate>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script type="ecmascript">
 export default {
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7
      }
    }
  }
</script>

<style lang="scss" scoped>
table{

}
</style>