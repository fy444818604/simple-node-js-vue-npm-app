<!-- 资源专辑主页 -->
<template>
    <div class="album">
        <div class="main-content">
            <res-search></res-search>
            <div class="res-boxs">
                 <res-box v-for="i in 20" :key="i" :index="4"></res-box>
            </div>
            <resPagination></resPagination>
        </div>
        <res-footer></res-footer>
    </div>
</template>

<script>
export default {
    components:{
        resBox:()=>import("@/components/res-box"),
        resFooter: () => import("@/components/res-footer"),
        resPagination:()=>import("@/components/res-pagination"),
        resSearch:()=>import("@/components/res-search")
    },
}
</script>

<style lang="scss" scoped="scoped">
.album {
    min-width: 1200px;
    background: #F5F6F8;
    overflow: hidden;
    .main-content {
        width: 80%;
        margin: 0 auto;
    }
    .res-boxs {
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        & > div {
          width: 20%;
        }
        @media screen and (max-width: 1520px) {
          & > div {
            width: 25%;
          }
        }
    }
}
</style>

