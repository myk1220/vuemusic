<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in img" :key='index'>
        <div class="banner">
            <img :src="item" alt="加载失败">
        </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    pagination: {
                    el: '.swiper-pagination'
                    },
                    loop:true,
                    autoplay:true,
                },
            }
        },
        props:{
            img:{
                type:Array,
                default:function(){
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
.banner {
    padding: 10px;
}

.banner img {
    border-radius: 10px;
}
</style>