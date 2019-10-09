<template>
    <div ref='play' class="play" v-if="playerInfo.songinfo">
        <div class="header">
            <div class="title">
                <router-link to="/">
                    <i class="iconfont icon-shouye left"></i>
                </router-link>
                <div class="music-info">
                    <p class="song-title">{{ playerInfo.songinfo.title }}</p>
                    <p class="author">{{ playerInfo.songinfo.author }}</p>
                </div>
                <router-link to="/search">
                    <i class="iconfont icon-sousuo right"></i>
                </router-link>
            </div>
        </div>

        <div class="song-info">
            <div class="song-info-img">
                <img :src="playerInfo.songinfo.pic_radio">
                <Lrc :songid="this.$route.params.id" :currentTime="currentTime" :duration="duration"/>
            </div>
            <div class="iconbox">
                <i class="iconfont icon-shoucang2 left"></i>
                <i class="box"></i>
                <i class="iconfont icon-xiazai right"></i>
            </div>
        </div>

        <div class="song">
            <audio ref="player" :src="playerInfo.bitrate.show_link" controls></audio>
        </div>
    </div>
</template>

<script>

import Lrc from "../../components/Lrc"

export default {
    name: "Player",
    data() {
        return {
            playerInfo: {},
            currentTime:"",
            duration:"",
        };
    },
    components:{
        Lrc
    },
    mounted() {
        this.$api
            .playerData({
                method: "baidu.ting.song.play",
                songid: this.$route.params.id
            })
            .then(res => {
                this.playerInfo = res.data;
                // DOM还没有更新
                this.$nextTick(function() {
                    this.$refs.play.style.height = document.documentElement.clientHeight + "px";
                    // DOM 现在更新了
                   //获取当前播放时间和总时长
                    this.playerAddEventListen();
                });
            });
    },
    methods:{
        playerAddEventListen(){
            this.$refs.player.addEventListener("timeupdate",this.currentTimeHandler)
            this.$refs.player.addEventListener("canplay",this.durationTimeHandler)
        },
        playerRemoveEventListen(){
            this.$refs.player.removeEventListener("timeupdate",this.currentTimeHandler);
            this.$refs.player.removeEventListener("canplay",this.durationTimeHandler)
        },

        currentTimeHandler(){
            this.currentTime = this.$refs.player.currentTime;
        },
        durationTimeHandler(){
            this.duration = this.$refs.player.duration
        }
    },
    beforeDestroy() {
        this.playerRemoveEventListen();
    },
};
</script>

<style scoped>
.header {
    padding:15px;
}

.music-info {
    flex: 1;
    font-size: 20px;
}

.title {
    display: flex;
    text-align: center;
}

.left {
    font-size: 30px;
}

.ca {
    color: red;
}

.right {
    font-size: 30px;
}

.song-info {
    padding: 15px;
}

.song-info-img {
    text-align: center;
    margin-top: 20px;
    background-color: rgb(236, 232, 232);
    border-radius: 20%;
}

.song-title {
    padding: 0 10px;
}

.song-info-img img {
    width: 50%;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
    margin-top: 10px;
    min-height: 50px;
}

.iconbox {
    display: flex;
    margin-top: 30px;
}

.iconbox .box {
    flex: 1;
}

.song {
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.song audio {
    width: 80%;
}

.active {
    color: #222;
}

.author {
    font-size: 12px;
    color: #999;
}
</style>
