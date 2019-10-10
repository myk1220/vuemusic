<template>
    <div>
        <Nav />
        <HomeSwiper :img='imgs' />
        <HomeData />
        <BackTop />
    </div>
</template>

<script>

import Nav from '../../components/Nav'
import HomeData from './HomeData'
import HomeSwiper from '../../components/Swiper'
import BackTop from '../../components/BackTop'

    export default {
        name:'Home',
        components:{
            HomeData,
            HomeSwiper,
            Nav,
            BackTop
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