<template>
    <div class="page-container" id="ele-input-number">
        <div class="fy-page-title">inputNumber 计数器</div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">基础用法</div>
                    <div class="box-panel">
                        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">禁用状态</div>
                    <div class="box-panel">
                        <el-input-number v-model="num2" :disabled="true"></el-input-number>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">精度</div>
                    <div class="box-panel">
                        <el-input-number v-model="num9" :precision="2" :step="0.1" :max="10"></el-input-number>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">步数</div>
                    <div class="box-panel">
                        <el-input-number v-model="num3" :step="2"></el-input-number>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="box">
            <el-row>
                <el-col :span="12">
                    <div class="box-title">尺寸</div>
                    <div class="box-panel">
                        <el-input-number v-model="num4"></el-input-number>
                        <el-input-number size="medium" v-model="num5"></el-input-number>
                        <el-input-number size="small" v-model="num6"></el-input-number>
                        <el-input-number size="mini" v-model="num7"></el-input-number>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="box-title">按钮位置</div>
                    <div class="box-panel">
                        <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
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
            num1: 1,
            num2: 1,
            num4: 1,
            num5: 1,
            num6: 1,
            num7: 1,
            num9: 1,
            num8: 1,
            num3: 5
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    }
    };
</script>

<style lang="scss" scoped>

</style>