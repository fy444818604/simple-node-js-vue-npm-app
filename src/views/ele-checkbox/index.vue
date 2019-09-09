<!--<template>-->
    <!--<div class="page-container" id="ele-checkbox">-->
        <!--<div class="fy-page-title">Checkbox 多选框</div>-->
        <!--<div class="box">-->
            <!--<el-row>-->
                <!--<el-col :span="12">-->
                    <!--<div class="box-title">基础用法</div>-->
                    <!--<div class="box-title-explain">单独使用可以表示两种状态之间的切换，-->
                        <!--写在标签中的内容为 checkbox 按钮后的介绍。</div>-->
                    <!--<div class="box-panel">-->
                        <!--&lt;!&ndash; `checked` 为 true 或 false &ndash;&gt;-->
                        <!--<el-checkbox v-model="checked">备选项</el-checkbox>-->
                    <!--</div>-->
                <!--</el-col>-->
                <!--<el-col :span="12">-->
                    <!--<div class="box-title">禁用状态</div>-->
                    <!--<div class="box-title-explain">多选框不可用状态。</div>-->
                    <!--<div class="box-panel">-->
                        <!--<el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>-->
                        <!--<el-checkbox v-model="checked2" disabled>备选项</el-checkbox>-->
                    <!--</div>-->
                <!--</el-col>-->
            <!--</el-row>-->
        <!--</div>-->
        <!--<div class="box">-->
            <!--<el-row>-->
                <!--<el-col :span="12">-->
                    <!--<div class="box-title">多选框组</div>-->
                    <!--<div class="box-title-explain">适用于多个勾选框绑定到同一个数组的情-->
                        <!--景，通过是否勾选来表示这一组选项中选中的项。</div>-->
                    <!--<div class="box-panel">-->
                        <!--<el-checkbox-group v-model="checkList">-->
                            <!--<el-checkbox label="复选框 A"></el-checkbox>-->
                            <!--<el-checkbox label="复选框 B"></el-checkbox>-->
                            <!--<el-checkbox label="复选框 C"></el-checkbox>-->
                            <!--<el-checkbox label="禁用" disabled></el-checkbox>-->
                            <!--<el-checkbox label="选中且禁用" disabled></el-checkbox>-->
                        <!--</el-checkbox-group>-->
                    <!--</div>-->
                <!--</el-col>-->
                <!--<el-col :span="12">-->
                    <!--<div class="box-title">indeterminate 状态</div>-->
                    <!--<div class="box-title-explain">indeterminate 属性用以表示 checkbox-->
                        <!--的不确定状态，一般用于实现全选的效果</div>-->
                    <!--<div class="box-panel">-->
                        <!--<el-checkbox :indeterminate="isIndeterminate" v- -->
                                     <!--model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
                        <!--<div style="margin: 15px 0;"></div>-->
                        <!--<el-checkbox-group v-model="checkedCities"-->
                                           <!--@change="handleCheckedCitiesChange">-->
                            <!--<el-checkbox v-for="city in cities" :label="city"-->
                                         <!--:key="city">{{city}}</el-checkbox>-->
                        <!--</el-checkbox-group>-->
                    <!--</div>-->
                <!--</el-col>-->
            <!--</el-row>-->
        <!--</div>-->
        <!--<div class="box">-->
            <!--<el-row>-->
                <!--<el-col :span="12">-->
                    <!--<div class="box-title">带有边框</div>-->
                    <!--<div class="box-title-explain">适用于多个勾选框绑定到同一个数组的情-->
                        <!--景，通过是否勾选来表示这一组选项中选中的项。</div>-->
                    <!--<div class="box-panel">-->
                        <!--<div>-->
                            <!--<el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>-->
                            <!--<el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>-->
                        <!--</div>-->
                        <!--<div style="margin-top: 20px">-->
                            <!--<el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>-->
                            <!--<el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>-->
                        <!--</div>-->
                        <!--<div style="margin-top: 20px">-->
                            <!--<el-checkbox-group v-model="checkboxGroup5" size="small">-->
                                <!--<el-checkbox label="备选项1" border></el-checkbox>-->
                                <!--<el-checkbox label="备选项2" border disabled></el-checkbox>-->
                            <!--</el-checkbox-group>-->
                        <!--</div>-->
                        <!--<div style="margin-top: 20px">-->
                            <!--<el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>-->
                                <!--<el-checkbox label="备选项1" border></el-checkbox>-->
                                <!--<el-checkbox label="备选项2" border></el-checkbox>-->
                            <!--</el-checkbox-group>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</el-col>-->
                <!--<el-col :span="12">-->
                    <!--<div class="box-title">按钮样式</div>-->
                    <!--<div class="box-title-explain">按钮样式的多选组合。</div>-->
                    <!--<div class="box-panel">-->
                        <!--<div>-->
                            <!--<el-checkbox-group v-model="checkboxGroup1">-->
                                <!--<el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>-->
                            <!--</el-checkbox-group>-->
                        <!--</div>-->
                        <!--<div style="margin-top: 20px">-->
                            <!--<el-checkbox-group v-model="checkboxGroup2" size="medium">-->
                                <!--<el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>-->
                            <!--</el-checkbox-group>-->
                        <!--</div>-->
                        <!--<div style="margin-top: 20px">-->
                            <!--<el-checkbox-group v-model="checkboxGroup3" size="small">-->
                                <!--<el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>-->
                            <!--</el-checkbox-group>-->
                        <!--</div>-->
                        <!--<div style="margin-top: 20px">-->
                            <!--<el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>-->
                                <!--<el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>-->
                            <!--</el-checkbox-group>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</el-col>-->
            <!--</el-row>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--const cityOptions = ['上海', '北京', '广州', '深圳'];-->
    <!--export default {-->
        <!--data() {-->
        <!--return {-->
            <!--checked: true,-->
            <!--checked1: false,-->
            <!--checked2: true,-->
            <!--checkList: ['选中且禁用','复选框 A'],-->
            <!--checkAll: false,-->
            <!--checkedCities: ['上海', '北京'],-->
            <!--cities: cityOptions,-->
            <!--isIndeterminate: true,-->
            <!--checked3: true,-->
            <!--checked4: false,-->
            <!--checked5: false,-->
            <!--checked6: true,-->
            <!--checkboxGroup5: [],-->
            <!--checkboxGroup6: [],-->
            <!--checkboxGroup1: ['上海'],-->
            <!--checkboxGroup2: ['上海'],-->
            <!--checkboxGroup3: ['上海'],-->
            <!--checkboxGroup4: ['上海'],-->
        <!--};-->
    <!--},-->
    <!--methods: {-->
        <!--handleCheckAllChange(val) {-->
            <!--this.checkedCities = val ? cityOptions : [];-->
            <!--this.isIndeterminate = false;-->
        <!--},-->
        <!--handleCheckedCitiesChange(value) {-->
            <!--let checkedCount = value.length;-->
            <!--this.checkAll = checkedCount === this.cities.length;-->
            <!--this.isIndeterminate = checkedCount > 0 && checkedCount <-->
                    <!--this.cities.length;-->
        <!--}-->
    <!--}-->
    <!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->