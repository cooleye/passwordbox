<template>
<transition name="fade">
    <div class="add-container">
        
        <div class="add-panel text-center">
            <h1>更新数据</h1>

            <i class="el-icon-circle-close position" @click="close"></i>
            
            <el-input v-model="id" disabled hidden></el-input>

            <div class="input-item text-left">
                数据名称：
                <el-input v-model="add_key" placeholder="请输入内容"></el-input>
            </div>
            <div class="input-item text-left">
                数据值：
                <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="add_value">
                </el-input>
            </div>
            <div class="input-item text-right">
                <el-button type="primary" @click="updateData">确认更新</el-button>
            </div>

        </div>
    </div>
</transition>
</template>

<script>
export default {
    props:["item"],
    data(){
        return {
            id:this.item.id,
            add_key:this.item.key,
            add_value:this.item.value
        }
    },
    watch:{
        item(){
            console.log('--------')
            this.id = this.item.id;
            this.add_key = this.item.key;
            this.add_value = this.item.value;
        }
    },
    methods:{
        updateData(){

            if(this.add_key != "" && this.add_value != ""){
                this.$emit('updatedata',{id:this.id,key:this.add_key,value:this.add_value})
                this.add_key = "";
                this.add_value = "";
            }
        },
        close(){
            this.$emit("close")
        }
    }
}
</script>

<style scoped>
.add-container{
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.55);
    z-index: 999;
}

.add-panel{
    width: 500px;
    /* height: 300px; */
    margin: 0 auto;
    background: #fff;
    padding: 30px;
    margin-top: 50px;
    position: relative;
    border-radius: 5px;
    padding-bottom: 40px;
    /* transform: translateY(-200px) */
}

.input-item{
    margin-top: 10px;
}

.position{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 24px;
}
</style>
