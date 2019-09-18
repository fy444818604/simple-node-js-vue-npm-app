<!--行政区域-->
<template>
    <div class="adm-areas">
        <div class="adm-areas-left">
            <tree></tree>
        </div>
        <div></div>

    </div>
</template>

<script>
    import tree from './tree'
    export default {
        name: "adm-areas",
        data(){
            return{

            }
        },
        components:{
           'tree':tree
        }
    }
</script>

<style scoped>
    .adm-areas{
        height: 100%;
        display: flex;
    }
    .adm-areas-left{
        width: 210px;
    }
</style>
