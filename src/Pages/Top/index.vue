<template>
    <div>
        <Nav />
        <MusicType :info='info'/>
    </div>
</template>

<script>
    import Nav from '../../components/Nav'
    import MusicType from '../../components/MusicType'
    export default {
        name:'Top',
        components:{
            Nav,
            MusicType
        },
        data(){
            return{
                info:[
                    {
                        typ:'2',
                        title:'新歌榜',
                        imgSrc:require("../../assets/img/1.jpg")
                    },
                    {
                        typ:'1',
                        title:'热歌榜',
                        imgSrc:require("../../assets/img/2.jpg")
                    },
                    {
                        typ:'22',
                        title:'老歌榜',
                        imgSrc:require("../../assets/img/3.jpg")
                    },
                    {
                        typ:'11',
                        title:'摇滚榜',
                        imgSrc:require("../../assets/img/4.jpg")
                    },
                ],
            }
        }
    }
</script>

<style  scoped>

</style>