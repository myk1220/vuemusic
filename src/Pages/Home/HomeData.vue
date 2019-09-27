<template>
    <div>
        <MusicList title="今日推荐" v-if="todayRecommend.length>0" :data="todayRecommend"/>
        <MusicList title="热门推荐" v-if="hotMusic.length>0" :data="hotMusic"/>
        <MusicList title="摇滚歌曲" v-if="rockMusic.length>0" :data="rockMusic"/>
        <MusicList title="经典歌曲" v-if="oldMusic.length>0" :data="oldMusic"/>
    </div>
</template>

<script>

import MusicList from "../../components/MusicList";

    export default {
        name:'Home',
        components:{
            MusicList
        },
        data() {
            return {
                todayRecommend: [],
                hotMusic: [],
                rockMusic:[],
                oldMusic:[]
            };
        },
        mounted(){
            this.$api.getTodayRecommend({
                method: "baidu.ting.billboard.billList",
                type: 1,
                size: 6,
                offset: 0
            })
            .then(res => {
                this.todayRecommend = res.data.song_list;
            });          
        }
    }
</script>

<style  scoped>

</style>