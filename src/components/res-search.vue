<template>
    <div class="search-box">
        <input placeholder="搜索" type="text" />
        <span>
            <i class="iconfont icon-search-1"></i>
        </span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search-box {
    width: 504px;
    height: 40px;
    position: relative;
    margin: 40px auto 20px;
    input {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        padding-left: 10px;
        border: 2px solid #f3f5f7;
        outline: none;
    }
    span {
        position: absolute;
        top: 2px;
        right: 0;
        display: inline-block;
        width: 72px;
        height: 36px;
        background: #2695ff;
        border-radius: 0 20px 20px 0;
        text-align: center;
        cursor: pointer;
        i {
            color: #fff;
            font-size: 25px;
            line-height: 36px;
            position: relative;
            left: -5px;
        }
    }
}
</style>