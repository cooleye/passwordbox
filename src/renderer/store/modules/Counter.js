import DB from '../db.js';

let state = { 
  main: 0,
  user:null,
  dataTable:[],
  currentUser:{}
}

const mutations = {
    INIT_ADMIN(state,data){
      state.user = data;
    },
    INIT_TABLE(state,data){
      state.dataTable = data;
    },
    SAVE_CURRENT_USER(state,user){
      state.currentUser = user;
      console.log('保存当前用户：',state.currentUser)
    },
    INSERT_DATA(state,params){
      if(params){
        state.dataTable.push(params)
      }
    }
}

const actions = {
    /**
     * 
     * @param {*} param0 
     * 从数据库中读取数据，加载到内存中
     */
    LOAD_DATA_FROM_DB({commit,state}){

      DB.adminData.find({},function(err,docs){
        if(err){
          console.log('>>>>>>>>>',err)
        }else{
          console.log('加载 admin >>>>>>>>>',docs)
          
          commit("INIT_ADMIN",docs);
        }
      })

      console.log('>>>>>>>>>>loading data:',state.currentUser.id)
      //根据当前用户id查找数据
      DB.tableData.find({userid:state.currentUser.id},function(err,docs){
        if(err){
          console.log('>>>>>>>>>',err)
        }else{
          console.log('加载 dataTable >>>>>>>>>',docs)
          
          commit("INIT_TABLE",docs);
        }
      })
      
    },
    LOGIN({commit},user){
      console.log(user)
      return new Promise(function(resolve,reject){

        DB.adminData.find(user,function(err,docs){
          if(err){
            // console.log(err)
            reject(err)
          }else{
            console.log('管理员登录：',docs)
            //把当前用户信息保存下来，以后添加数据的时候，把当前用户的id也存在数据中
            //查找数据的时候根据用户id查找
            commit("SAVE_CURRENT_USER",docs[0])
            resolve(docs)
          }
        })

      })
    },
    /**
     * 
     * @param {*} param0 
     * @param {*} params 
     * 用户注册
     * 把注册信息保存在数据库中
     */
    REGIST_USER({commit},insertuser){

      return new Promise(function(resolve,reject){


        DB.adminData.find({username:insertuser.username},function(err,users){
            if(err){
              reject(err)
            }else{
              if(users.length >=1){
                console.log('用户已存在：',users);
                resolve("用户已存在")
              }else{
                DB.adminData.insert(insertuser, (err,newuser) => {
                  if(err){
                    reject(err)
                  }else{
                    console.log(">>>>>添加新用户>>>>>>>",newuser);
                    resolve(newuser)
                  }
                })
              }
            }
        })
      })
    },
    INSERT_DATA({commit},params){
     
      return new Promise(function(resolve,reject){
        DB.tableData.insert(params, (err,docs) => {
          if(err){
            reject(err)
          }else{
            console.log("添加数据>>>>>>>",docs);
            commit("INSERT_DATA",params)
            resolve(docs)
          }
        })
      })

    },
    DELETE_DATA({commit,state},id){
    
      return new Promise(function(resolve,reject){
          DB.tableData.remove({id:id},function(err,docs){
              if(err){
                reject(err)
              }else{
                console.log("删除数据>>>>>>>>>>",docs)
                DB.tableData.find({userid:state.currentUser.id},function(err,docs){
                  if(err){
                    console.log('>>>>>>>>>',err)
                  }else{
                    console.log('加载 dataTable >>>>>>>>>',docs)
                    
                    commit("INIT_TABLE",docs);
                    resolve(docs)
                  }
                })
                

              }
          })
      })
    },
    UPDATE_DATA({commit,state},item){
        if(item){
          
          return new Promise(function(resolve,reject){
            DB.tableData.update({ id: item.id }, { $set: { key: item.key, value: item.value} }, { multi: true }, function (err, numReplaced) {
              if(err){
                reject(err)
              }else{
                resolve(numReplaced)

                DB.tableData.find({userid:state.currentUser.id},function(err,docs){
                  if(err){
                    console.log('>>>>>>>>>',err)
                  }else{
                    console.log('加载 dataTable >>>>>>>>>',docs)
                    
                    commit("INIT_TABLE",docs);
                    resolve(docs)
                  }
                })

              }
            });
          })

        }
    }
}

const getters = {
  USER(state){
    return state.user;
  },
  DATA_TABLE(state){
    return state.dataTable
  },
  CURRENT_USER(state){
    return state.currentUser;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
