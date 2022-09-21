<template>
    <div class="py-5 count">
    <div class="container s d-flex justify-content-around align-items-center">
        <div class="text-center a">
            <span data-counter= "45">0</span>
            <p>Web Designer</p>
        </div>
        <div class="text-center a">
            <span data-counter= "86">0</span>
            <p>Apps Develop</p>
        </div>
        <div class="text-center a">
            <span data-counter= "825">0</span>
            <p>Happy Clients</p>
        </div>
        <div class="text-center a">
            <span data-counter= "1300">0</span>
            <p>WebSite Designed</p>
        </div>
    </div>
    </div>
</template>

<script>
setTimeout(()=>{
    let counter = document.querySelectorAll('.a span');
    let count = document.querySelector('.count');
    if(count.dataset.scroll = "in"){
        counter.forEach((el)=>{
            let time = setInterval(()=>{
                if(Number(el.innerHTML) < el.dataset.counter){
                    el.innerHTML = Number(el.innerHTML) + 1;
                }else{
                    clearInterval(time);
                }
            },0.000005)
        })
    }else{
        counter.forEach((el)=>{
            el.innerHTML = 0;
        });
    }
},10)
</script>

<style scoped>
span{
    color:#30c39e;
    font-size: 35px;
    font-weight: bold;
}
p{
    font-size: 24px;
    font-weight:500;
}
@media(max-width:768px){
    .s{
        flex-direction: column;
    }
}
</style>