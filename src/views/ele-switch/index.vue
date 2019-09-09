<template>
    <div class="page-container" id="ele-switch">
        <div class="fy-page-title">Switch 开关</div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        基本用法
                    </div>
                    <div class="box-panel">
                        <el-switch
                                v-model="value2"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        文字描述
                    </div>
                    <div class="box-panel">
                        <el-col :span="12">
                            <el-switch
                                    v-model="value3"
                                    active-text="按月付费"
                                    inactive-text="按年付费">
                            </el-switch>
                        </el-col>
                        <el-row :span="12">
                            <el-switch
                                    style="display: block"
                                    v-model="value4"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-text="按月付费"
                                    inactive-text="按年付费">
                            </el-switch>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        扩展的 value 类型
                    </div>
                    <div class="box-panel">
                        <el-tooltip :content="'Switch value: ' + value5" placement="top">
                            <el-switch
                                    v-model="value5"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-value="100"
                                    inactive-value="0">
                            </el-switch>
                        </el-tooltip>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        禁用状态
                    </div>
                    <div class="box-panel">
                        <el-col :span="12">
                            <el-switch
                                    v-model="value6"
                                    disabled>
                            </el-switch>
                        </el-col>
                        <el-col :span="12">
                            <el-switch
                                    v-model="value7"
                                    disabled>
                            </el-switch>
                        </el-col>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            value1: true,
            value2: true,
            value3: true,
            value4: true,
            value5: '100',
            value6: true,
            value7: false
        }
    }
    };
</script>

<style lang="scss" scoped>

</style>