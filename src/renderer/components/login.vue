<template>

    <div class="container">
            
            <!-- <img src="/static/bg2.jpg"   class="bgimg" > -->
            <div class="center">
                    <div class="demo-input-suffix text-center">
                        <h1>登 录</h1>
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
                        <i slot="suffix" class="el-input__icon  iconfont icon-mima"></i>
                    </el-input>
                   
                    </div>

                    <div class="demo-input-suffix" >
                        <el-button type="primary" style="width:100%" @click="login" @keydown.enter="login">登 录</el-button>
                    </div>

                    <p class="text-center red f-size-12" v-show="warrning">{{warrning}}</p>

                    <div class="demo-input-suffix text-center text-gray">
                        <h6>还没有账户？<router-link to="/regist">注册</router-link></h6>
                    </div>
            </div>
            
    </div>
</template>

<script>

export default {
    data(){
        return{
            user:null,
            username:"",
            password:"",
            warrning:false
        }
    },
    methods:{
        login(){
            //trim
            this.username = this.username.replace(/^\s+|\s+$/gm,'');
            this.password = this.password.replace(/^\s+|\s+$/gm,'');
            if(this.username == "" || this.password == ""){
                this.warrning = '用户名或密码为空';
                return;
            }else{
                
                this.$store.dispatch("LOGIN",{
                    username:this.username,
                    password:this.password
                })
                .then((result) => {
                    console.log(result)  
                    if(result.length <= 0){
                        this.warrning = '用户不存在😂';
                    }else{
                        //登录成功，跳转到主页
                        this.$router.push("/main")
                        this.$store.dispatch("LOAD_DATA_FROM_DB");
                    }
                }).catch((err) => {
                    this.warrning = '不可知错误🤔';
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
    position: relative;
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
