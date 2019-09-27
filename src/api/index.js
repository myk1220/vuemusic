import base from "./base"
import axios from "../utils/http"

const getData = {
    // 获取推荐歌曲
    getTodayRecommend(params){
        return axios.get(base.baseUrl+base.type,{
            params:params
        })
    },
    getTabsMusic(params){
        return axios.get(base.baseUrl+base.type,{
            params:params
        })
    },
    playerData(params){
        return axios.get(base.baseUrl+base.player,{
            params:params
        })
    },
    getLrcData(params){
        return axios.get(base.baseUrl+base.lrc,{
            params:params
        })
    }
}

export default getData