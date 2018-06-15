<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'my-project'
  }
</script>

<style>
  /* CSS */

  html,body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

 
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #app{
     width: 100%;
     height: 100%;
  }

  a{
    text-decoration: none;
  }
  a:link{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
  a:active{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }


.text-center{
  text-align: center;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.text-left{
  text-align: left;
  font-family: 'Courier New', Courier, monospace
}
.text-right{
  text-align: right;
  font-family: 'Courier New', Courier, monospace
}
.red{
  color: red;
}
.f-size-12{
  font-size: 12px;
}

.text-gray{
    color: #999;
    font-size: 20px;
}

.avatar img{
  width: 40px;
  height: 40px;
  border-radius: 25px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
