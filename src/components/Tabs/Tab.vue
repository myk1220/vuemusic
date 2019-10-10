<script>
    export default {
        name:'Tab',
        props:{
            index:{
                type:[String,Number],
                default:'1'
            },
            tabName:{
                type:String,
                default:"tab"
            }
        },
        computed:{
            active(){
                return this.index == this.$parent.currentIndex
            }
        },
        methods:{
            clickHandler(){
                this.$parent.changeIndex(this.index)
            }
        },
        mounted(){
            this.$parent.cont.push(this)
        },
        render(){
            let className = {
                tab:'tab',
                active:this.active
            }
            return(
                <li class={ className } onClick={ this.clickHandler.bind(this) }>
                    { this.tabName }
                </li>
            )
        },

    }
</script>

<style  scoped>

.tab {
    flex:1;
    list-style: none;
    line-height: 40px;
    position: relative;
    text-align:center;
}

.tab.active {
  border-bottom: 2px solid blue;
}

</style>