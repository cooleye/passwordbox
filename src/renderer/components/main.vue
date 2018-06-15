<template>
    <el-container style="width:100%;height:100%;background-color:#eee">
        <el-header style="background-color:#fff;position:relative;" class="header">
            <div class="logo">
                <img src="../assets/passwordbox.png" alt="">
            </div>
            <h1 style="margin-left=200px;">keep it secret</h1>
            
             <el-dropdown   trigger="click" style="position:absolute;right:10px;top:10px;">
                <span class="el-dropdown-link">
                    <div class="avatar avatar-pos">
                            <img src="../assets/tx/tx2_12.png" alt="">
                    </div>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="el-icon-setting"> 设置</el-dropdown-item>
                    <el-dropdown-item class="el-icon-upload2"> <span><router-link to="/login">退出</router-link></span></el-dropdown-item>
                    <el-dropdown-item class="el-icon-bell"> <span @click="about">关于</span></el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
                
          
        </el-header>
        
        <el-main>
            <div style="padding:10px;padding-left:0">
                <el-input v-model="search_input" placeholder="请输入内容" style="width:300px;"></el-input>
                <el-button type="primary" icon="el-icon-search" @click="searchData">搜索</el-button>
                <el-button type="primary" icon="el-icon-plus" style="float:right;" @click="addData">添加</el-button>
            </div>
             <el-table
                :data="tableData"
                border
                stripe
                max-height="400"
                :default-sort = "{prop: 'date', order: 'descending'}"
                style="width: 100%">

                <el-table-column
                type="index"
                fixed
                sortable
                >
                </el-table-column>
                
               <el-table-column
                prop="date"
                label="日期"
                fixed
                sortable
                width="120">
                </el-table-column>
                <el-table-column
                prop="key"
                label="数据名称"
                width="180">
                </el-table-column>
                <el-table-column
                prop="value"
                label="数据值">
                </el-table-column>

                <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="showUpdatePage(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="delItem(scope.row)" type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </el-main>

        <Adding  @senddata="receiveData" v-show="showAdding" @close="closeAddingPage"/>
        <Updating v-show="showUpdating" :item="item"   @close="closeUpdatePage" @updatedata="updatedata"/>
    </el-container>
</template>

<script>

import Adding from '@/components/adding';
import Updating from '@/components/update';
import uuidv1 from 'uuid/v1';
import moment from 'moment';

  export default {
    
    data() {
      return {
        search_input:"",
        showAdding:false,
        showUpdating:false,
        item:{}
      }
    },
    computed:{
        tableData(){
            return this.$store.getters.DATA_TABLE;
        }
    },
    components:{Adding,Updating},
    methods: {
      delItem(row) {

        this.$prompt('确定要删除吗？确定请输入数据名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
            
          if(value == row.key){
            console.log('row id',row);
            this.$store.dispatch('DELETE_DATA',row.id)
            .then(res => {
                if(res == 1){
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }
            })
          }else{
              this.$message({
                type: 'warning',
                message: '输入不正确'
            });
          }
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '操作取消'
          });       
        });
      },
      showUpdatePage(row){
          this.showUpdating = true;
          this.item = row;
          console.log('更新：',row)
      },
      searchData(v){
          console.log(this.search_input)
      },
      addData(){
          this.showAdding = true;
      },
      receiveData(params){
         console.log('此时的用户是：',this.$store.getters.CURRENT_USER.id)
         if(params){
             this.showAdding = false;
             params.id = uuidv1();
             params.date = moment(new Date).format("YYYY-MM-DD HH:mm:ss");
             params.userid = this.$store.getters.CURRENT_USER.id; //保存当前用户id
             this.$store.dispatch('INSERT_DATA',params);
         }
      },
      closeUpdatePage(){
          this.showUpdating = false;
      },
      closeAddingPage(){
        this.showAdding = false;
      },
      updatedata(item){
          this.showUpdating = false;
          console.log(item)
          this.$store.dispatch("UPDATE_DATA",item)
          .then( res => {
              console.log('更新数量：',res)
          })
      },
      logout(){
          console.log('登出...')
          this.$router.push("/login")
      },
      about(){
          console.log("about...")
          this.$router.push("/about")
      }
    }
  }
</script>

<style>

.header{
    box-shadow: 0 2px 4px #ccc;
}

.avatar-pos{
    
user-select: none;
outline: none
}

.logo{
    height: 50px;
    position: absolute;
    left: 10px;
    top: 5px;
}
.logo img{
    height: 100%;
}

.logo-text{
    left: 150px;
}
</style>
