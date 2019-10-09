<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in img" :key='index'>
        <div class="banner-wrap">
            <div class="banner">
                <img :src="item" alt="加载失败">
            </div>
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
                    autoplay:{
                        disableOnInteraction: false,
                    }
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
.banner-wrap {
    background-color: #f8f8f8;
    padding: 10px 0;
}

.banner-wrap .banner {
    padding: 15px;
    background-color: #fff;
}

.banner-wrap .banner img {
    border-radius: 10px;
}
</style>