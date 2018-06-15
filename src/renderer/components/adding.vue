<template>
    <transition name="fade">
    <div class="add-container">
        
        <div class="add-panel text-center">
            <h1>添加新数据</h1>
            <i class="el-icon-circle-close position" @click="close"></i>
            
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
                style="max-height:150px;"
                v-model="add_value">
                </el-input>
            </div>
            <div class="input-item text-right">
                <el-button type="primary" @click="addData">确认添加</el-button>
            </div>

        </div>
    </div>
</transition>
</template>

<script>
export default {
    data(){
        return {
            add_key:"",
            add_value:""
        }
    },
    methods:{
        addData(){

            if(this.add_key != "" && this.add_value != ""){
                this.$emit('senddata',{key:this.add_key,value:this.add_value})
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
    margin: 0 auto;
    background: #fff;
    padding: 30px;
    margin-top: 50px;
    position: relative;
    border-radius: 5px;
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
