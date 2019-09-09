<template>
    <div class="page-container" id="ele-slider">
        <div class="fy-page-title">Slider 滑块</div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        基础用法
                    </div>
                    <div class="box-panel">
                        <div class="block">
                            <span class="demonstration">默认</span>
                            <el-slider v-model="value1"></el-slider>
                        </div>
                        <div class="block">
                            <span class="demonstration">自定义初始值</span>
                            <el-slider v-model="value2"></el-slider>
                        </div>
                        <div class="block">
                            <span class="demonstration">隐藏 Tooltip</span>
                            <el-slider v-model="value3" :show-tooltip="false"></el-slider>
                        </div>
                        <div class="block">
                            <span class="demonstration">格式化 Tooltip</span>
                            <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
                        </div>
                        <div class="block">
                            <span class="demonstration">禁用</span>
                            <el-slider v-model="value5" disabled></el-slider>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        离散值
                    </div>
                    <div class="box-panel">
                        <div class="block">
                            <span class="demonstration">不显示间断点</span>
                            <el-slider
                                    v-model="value6"
                                    :step="10">
                            </el-slider>
                        </div>
                        <div class="block">
                            <span class="demonstration">显示间断点</span>
                            <el-slider
                                    v-model="value7"
                                    :step="10"
                                    show-stops>
                            </el-slider>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        带有输入框
                    </div>
                    <div class="box-panel">
                        <div class="block">
                            <el-slider
                                    v-model="value8"
                                    show-input>
                            </el-slider>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        范围选择
                    </div>
                    <div class="box-panel">
                        <div class="block">
                            <el-slider
                                    v-model="value9"
                                    range
                                    show-stops
                                    :max="10">
                            </el-slider>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        竖向模式
                    </div>
                    <div class="box-panel">
                        <div class="block">
                            <el-slider
                                    v-model="value10"
                                    vertical
                                    height="200px">
                            </el-slider>
                        </div>
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
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42,
            value6: 0,
            value7: 0,
            value8: 0,
            value9: [4, 8],
            value10: 0
        }
    },
    methods: {
        formatTooltip(val) {
            return val / 100;
        }
    }
    }
</script>

<style lang="scss" scoped>
    .block{
        padding: 0 15px;
    }
</style>