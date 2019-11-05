<template>
    <div>
        <div v-for="(item,index) in info" :key="index" class="musicType-wrap">
            <router-link :to="{name:'More',params:{type:item.typ}}">
                    <img :src="item.imgSrc" alt="图片加载失败">
                    <p>{{ item.title }}</p>     
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MusicType",
        data(){
            return{
                list:'',
                type:''
            }
        },
        props:{
            info:{
                type:Array,
                default:function(){
                    return [];
                }
            }
        },
    }
</script>

<style scoped>

.musicType-wrap {
    position: relative;
    width: 100%;
    height: 180px;
    text-align: center;
    margin: 10px 0;
}

.musicType-wrap  img {
    height: 180px;
    width: 100%;
}

.musicType-wrap  p {
    position: absolute;
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 30px;
    top:72.5px;
    left: 50%;
    transform: translateX(-45%);
    color: white;
}

</style>