<template>
    <div class="page-container" id="ele-datatimepicker">
        <div class="fy-page-title">
            DateTimePicker 日期时间选择器
        </div>
        <div class="box">
            <el-row>
                <el-col :span="8">
                    <div class="box-title">
                        日期和时间点(默认)
                    </div>
                    <div class="box-panel">
                        <el-date-picker
                                v-model="value1"
                                type="datetime"
                                placeholder="选择日期时间">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="box-title">
                        日期和时间点(带快捷选项)
                    </div>
                    <div class="box-panel">
                        <el-date-picker
                                v-model="value2"
                                type="datetime"
                                placeholder="选择日期时间"
                                align="right"
                                :picker-options="pickerOptions1">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="box-title">
                        日期和时间点(设置默认时间)
                    </div>
                    <div class="box-panel">
                        <el-date-picker
                                v-model="value3"
                                type="datetime"
                                placeholder="选择日期时间"
                                default-time="12:00:00">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        日期和时间范围(默认)
                    </div>
                    <div class="box-panel">
                        <el-date-picker
                                v-model="value4"
                                type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">
                        日期和时间范围(带快捷选项)
                    </div>
                    <div class="box-panel">
                        <el-date-picker
                                v-model="value5"
                                type="datetimerange"
                                :picker-options="pickerOptions2"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                align="right">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">
                        默认的起始与结束时刻
                    </div>
                    <div class="box-panel">
                        <el-date-picker
                                v-model="value7"
                                type="datetimerange"
                                align="right"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :default-time="['12:00:00', '08:00:00']">
                        </el-date-picker>
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
        pickerOptions1: {
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
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
         value7: ''
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>