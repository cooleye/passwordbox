<template>
    <div class="container">
        
        <div class="panel">
            <div class="loading-span">
                <div class="typing_loader"></div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    mounted(){

        setTimeout(() =>{
            this.$router.push('/login')
        },500)
    }
}
</script>

<style>

.container{
    width: 100%;
    height: 100%;
    background-image: url(../assets/bg.jpg);
    background-position: left;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment:scroll;
    overflow: hidden;
}
.panel{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    text-align: center;
}
.panel h1{
    font-family: 'Courier New', Courier, monospace;
    font-size: 40px;
    color:#fff;
    margin-top: 400px;
}

.loading-span{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-20px,-20px)

}


/*Typing Loader*/
 .typing_loader {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    -webkit-animation: typing 1s linear infinite alternate;
    -moz-animation: Typing 1s linear infinite alternate;
    -ms-animation: Typing 1s linear infinite alternate;
    animation: typing 1s linear infinite alternate;
    margin: 46px auto;
    /* Not necessary- its only for layouting*/
    position: relative;
    left: -12px;
}
@-webkit-keyframes typing {
    0% {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    25% {
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    75% {
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 1);
    }
}
@-moz-keyframes typing {
    0% {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    25% {
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    75% {
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 1);
    }
}
@keyframes typing {
    0% {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    25% {
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 2), 24px 0px 0px 0px rgba(255, 255, 255, 0.2);
    }
    75% {
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255, 255, 255, 0.2), 24px 0px 0px 0px rgba(255, 255, 255, 1);
    }
}

</style>
