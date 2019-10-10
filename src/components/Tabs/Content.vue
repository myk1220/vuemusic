<script>
    export default {
        name:'Content',
        props:{
            cont:{
                type: Array,
                default: function() {
                    return [];
                }
            }
        },
        render(){
            return(
                <div>
                    {
                        this.cont.map((element,index) => {
                            return element.active ? element.$slots.default : "" ;
                        })
                    }
                </div>
            )
        }
    }
</script>

<style scoped>

</style>