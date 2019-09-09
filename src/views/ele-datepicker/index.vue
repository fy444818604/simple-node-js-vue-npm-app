<template>
    <div class="page-container" id="ele-datepicker">
        <div class="fy-page-title">
            DatePicker 日期选择器
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        选择日
                    </div>
                    <div class="box-panel">
                        <el-col :span="12">
                            <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="12">
                            <el-date-picker
                                    v-model="value2"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期"
                                    :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-col>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        其他日期单位
                    </div>
                    <div class="box-panel">
                        <el-row :style="{marginBottom:'15px'}">
                            <el-col :span="12">
                                <el-date-picker
                                        v-model="value3"
                                        type="week"
                                        format="yyyy 第 WW 周"
                                        placeholder="选择周">
                                </el-date-picker>
                            </el-col>
                            <el-col :span="12">
                                <el-date-picker
                                        v-model="value4"
                                        type="month"
                                        placeholder="选择月">
                                </el-date-picker>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-date-picker
                                        v-model="value5"
                                        type="year"
                                        placeholder="选择年">
                                </el-date-picker>
                            </el-col>
                            <el-col :span="12">
                                <el-date-picker
                                        type="dates"
                                        v-model="value14"
                                        placeholder="选择一个或多个日期">
                                </el-date-picker>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        选择日期范围
                    </div>
                    <div class="box-panel">
                        <el-row>
                            <el-col :span="12">
                                <el-date-picker
                                        v-model="value6"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </el-col>
                            <el-col :span="12">
                                <el-date-picker
                                        v-model="value7"
                                        type="daterange"
                                        align="right"
                                        unlink-panels
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :picker-options="pickerOptions2">
                                </el-date-picker>
                            </el-col>
                        </el-row>
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
            pickerOptions1: {
                disabledDate(time) {
            return time.getTime() > Date.now();
        },
        shortcuts: [{
            text: '今天',
            onClick(picker) {
            picker.$emit('pick', new Date());
    }
    }, {
        text: '昨天',
                onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
        }
    }, {
        text: '一周前',
                onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
        }
    }]
    },
    value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value14: '',
            pickerOptions2: {
        shortcuts: [{
            text: '最近一周',
            onClick(picker) {
            const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
    }
    }, {
        text: '最近一个月',
                onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
        }
    }, {
        text: '最近三个月',
                onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
        }
    }]
    },
        value6: '',
            value7: ''
    };
    }
    };
</script>

<style lang="scss" scoped>

</style>