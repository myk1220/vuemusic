<template>
    <div>
        <HomeData />
        <HomeSwiper :img='imgs' />
    </div>
</template>

<script>
import HomeData from './HomeData'
import HomeSwiper from '../../components/Swiper'

    export default {
        name:'Home',
        components:{
            HomeData,
            HomeSwiper
        },
        data(){
            return{
                imgs:[
                    require("../../assets/img/b1.jpg"),
                    require("../../assets/img/b2.jpg"),
                    require("../../assets/img/b3.jpg")
                ]
            }
        }
    }
</script>

<style  scoped>

</style>