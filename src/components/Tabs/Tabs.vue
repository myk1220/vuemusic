<script>
import Content from './Content'
    export default {
        name:'Tabs',
        data(){
            return{
                cont:[]
            }
        },
        props:{
            currentIndex:{
                type:[String,Number],
                default:'1'
            }
        },
        render(){
            return(
                <div class='tabs'>
                    <ul class='tabs-header'>
                        { this.$slots.default }
                    </ul>
                    <Content cont={ this.cont }/>    
                </div>
            )
        },
        methods:{
            changeIndex(index){
                this.$emit('changedIndex',index)
            }
        }
    }
</script>

<style  scoped>

.tabs{
    background: #fff;
}

.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}

</style>