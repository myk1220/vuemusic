<template>
    <div>
        <Nav />
        <HomeSwiper :img='imgs' />
        <HomeData />
    </div>
</template>

<script>

import Nav from '../../components/Nav'
import HomeData from './HomeData'
import HomeSwiper from '../../components/Swiper'

    export default {
        name:'Home',
        components:{
            HomeData,
            HomeSwiper,
            Nav
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