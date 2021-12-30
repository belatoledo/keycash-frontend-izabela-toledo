<template>
 <div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
 </div>
</template>

<script>
export default {
 name: "LoadingPage"
}
</script>

<style scoped>
.loading {
 margin: 0 auto;
    width: 50px;
    height: 50px;
    position: relative;
    animation: animate 1s linear infinite;
    transform: rotate(45deg);
}

.loading span {
    position: absolute;
    width: 20px;
    height: 20px;
    animation: rotate 1s linear infinite;
}

.loading span:nth-child(1)
{
    top: 0;
    left: 0;
    background-color: #ffc107;
}

.loading span:nth-child(2)
{
    top: 0;
    right: 0;
    background-color: #F60094;
}

.loading span:nth-child(3)
{
    bottom: 0;
    left: 0;
    background-color: #F60094;
}

.loading span:nth-child(4)
{
    bottom: 0;
    right: 0;
    background-color: #ffc107;
}

@keyframes rotate
{
    0% {
        transform: rotate(0deg);
    }
    10% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(90deg);
        opacity: 0.7;
             
    }
    90% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(90deg);
         
    }
}

@keyframes animate 
{
    0% 
    {
        width: 50px;
        height: 50px;
        
    }
    10% 
    {
        width: 50px;
        height: 50px;   
    }
    50% 
    {
        width: 100px;
        height: 100px;  
             
    }
    90% 
    {
        width: 40px;
        height: 40px;       
    }
    100% 
    {
        width: 40px;
        height: 40px;
    }
}
</style>