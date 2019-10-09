<template>
    <div class="lrcContainer">
        <!-- 
            currentTime > key  && currentTime < key + 1
            currentTime > allKeys[index]  && currentTime <allKeys[index+1]
        -->
        <!-- <p v-if="currentTime > allKeys[index] && currentTime <allKeys[index+1]" v-for="(value,key,index) in lrcContent" :key="index">{{ value }}</p> -->
        <div class="lrc" ref="lrc">
            <!-- <p :class="{ 'active':currentTime > allKeys[index]  && currentTime <allKeys[index+1] }" class="lrc-p" v-for="(value,key,index) in lrcContent" :key="index">{{ value }}</p> -->
            <p :class="{ 'active':currentTime > allKeys[index]  && currentTime <allKeys[index+1] }" class="lrc-p" v-for="(value,key,index) in lrcContent" :key="index">{{ value }}{{ scrollLRC(index) }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Lrc",
    data() {
        return {
            lrcContent: {},
            allKeys: []
        };
    },
    props: {
        songid: {
            type: [String, Number],
            defult: ""
        },
        currentTime: {
            type: [String, Number],
            default: 0
        },
        duration: {
            type: [String, Number],
            default: 0
        }
    },
    mounted() {
        this.$api
            .getLrcData({
                method: "baidu.ting.song.lry",
                songid: this.songid
            })
            .then(res => {
                // this.lrcContent = res.data.lrcContent
                this.lrcParse(res.data.lrcContent);
            });
    },
    methods: {
        lrcParse(data) {
            var lyrics = data.split("\n");
            var lyricObj = {};
            for (var i = 0; i < lyrics.length; i++) {
                var reg = /\[\d*:\d*((\.|\:)\d*)\]/g; // [10:10.10]  [10:10:10]
                var timeRegExpArr = lyrics[i].match(reg); // reg.test
                // 时间
                if (timeRegExpArr) {
                    var t = timeRegExpArr[0];
                    var min = Number(String(t.match(/\[\d*/i)).slice(1));
                    var sec = Number(String(t.match(/\:\d*/i)).slice(1));
                    var time = min * 60 + sec;
                }
                /**
                 * 把时间和歌词对应起来
                 */
                var content = lyrics[i].replace(timeRegExpArr, "");
                lyricObj[time] = content;
            }
            this.lrcContent = lyricObj;
            this.getAllKeys();
        },
        getAllKeys() {
            for (var i in this.lrcContent) {
                this.allKeys.push(i);
            }
        },
        // 字节跳动
        scrollLRC(index){
            if(this.currentTime > this.allKeys[index]  && this.currentTime < this.allKeys[index+1]){
                this.$refs.lrc.style.animation top = (-((index-2) * 30)) + "px";
            }
        }
    }
};
</script>

<style scoped>
.active {
    color: red;
}

.lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
}

.lrc {
    width: 100%;
    position: absolute;
    top: 0;
}

.lrc-p {
    height: 30px;
    line-height: 30px;
}

.up30 {
    margin-top: -30px;
}
</style>

