<template>
    <div class="container">

            <div class="center">
                    <div class="demo-input-suffix text-center">
                        <h1>注 册</h1>
                    </div>
                    <div class="demo-input-suffix">
                    <el-input
                        placeholder="请输入用户名"
                        suffix-icon="iconfont icon-yonghu"
                        v-model="username">
                    </el-input>
                    
                    </div>
                    <div class="demo-input-suffix">
                    <el-input
                        placeholder="请输入密码"
                        type="password"
                        v-model="password">
                        <i slot="suffix" class="el-input__icon iconfont icon-mima"></i>
                    </el-input>
                    </div>

                    <div class="demo-input-suffix"> 
                    <el-input
                        placeholder="确认密码"
                        type="password"
                        v-model="password2">
                        <i slot="suffix" class="el-input__icon iconfont icon-mima"></i>
                    </el-input>
                        
                    </div>
                     

                    <div class="demo-input-suffix" >
                        <el-button type="primary" style="width:100%" @click="regist">注 册</el-button>
                    </div>

                    <p class="text-center red f-size-12" v-show="warrning">{{warrning}}</p>

                    <div class="demo-input-suffix text-center text-gray">
                        <h6>已经有账户？直接<router-link to="/login">登录</router-link></h6>
                    </div>
            </div>
    </div>
</template>

<script>
import uuidv1 from 'uuid/v1';
import moment from 'moment';

export default {
    data(){
        return{
            user:null,
            username:"",
            password:"",
            password2:"",
            warrning:false
        }
    },
    methods:{
        regist(){
            //trim
            this.username = this.username.replace(/^\s+|\s+$/gm,'');
            this.password = this.password.replace(/^\s+|\s+$/gm,'');
            this.password2 = this.password.replace(/^\s+|\s+$/gm,'');
            if(this.username == "" || this.password == ""){
                this.warrning = '用户名或密码为空';
                return;
            }else if( this.password != this.password2){
                this.warrning = '两次密码输入不一致';
            }else{
                this.$store.dispatch("REGIST_USER",{
                    id:uuidv1(),
                    date:moment(new Date).format("YYYY-MM-DD HH:mm:ss"),
                    username:this.username,
                    password:this.password,
                    role:"admin"
                })
                .then( result => {
                    console.log(result)
                    if(result == "用户已存在"){
                        this.warrning = '用户已存在';
                    }else{
                        this.$router.push("/login")
                    }

                }).catch((err) => {
                    console.log(err)
                });  
              
            }
        }
    }
}
</script>

<style scoped>

.container{
    width: 100%;
    height: 100%;
    background-image: url(../assets/bg.jpg);
    background-size: 100% 100%;
}

.center{
    width: 300px;
    background: #fff;
    padding: 30px;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-180px,-180px)
}

.demo-input-suffix{
    margin-top: 10px;
}

</style>
