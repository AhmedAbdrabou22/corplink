<template>
    <div class="py-5 count">
        <div class="container s asa d-flex justify-content-around align-items-center">
            <div class="text-center a">
                <span data-counter="45">0</span>
                <p>Web Designer</p>
            </div>
            <div class="text-center a">
                <span data-counter="86">0</span>
                <p>Apps Develop</p>
            </div>
            <div class="text-center a">
                <span data-counter="825">0</span>
                <p>Happy Clients</p>
            </div>
            <div class="text-center a">
                <span data-counter="1300">0</span>
                <p>WebSite Designed</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // setTimeout(()=>{
    //     let asa = document.querySelector('.asa');
    //     let goals = document.querySelectorAll('.a span');
    //     let startFun = false;
    // window.onscroll = function(){
    //     if(window.scrollY >= asa.offsetTop){
    //         if(!startFun){
    //             goals.forEach((num)=>{start(num)})
    //         }
    //         startFun = true; 
    //     }
    // }
    // function start(el){
    //     let count = el.dataset.counter;
    //     let goal = setInterval(()=>{
    //         el.textContent++;
    //         if(el.textContent == count){
    //             clearInterval(goal)
    //         }
    //     },1)
    // }
    // },10)
    mounted() {
        let asa = document.querySelector('.asa');
        let goals = document.querySelectorAll('.a span');
        let startFun = false;
        window.onscroll = function () {
            if (window.scrollY >= asa.offsetTop) {
                if (!startFun) {
                    goals.forEach((num) => { start(num) })
                }
                startFun = true;
            }
        }
        function start(el){
        let count = el.dataset.counter;
        let goal = setInterval(()=>{
            el.textContent++;
            if(el.textContent == count){
                clearInterval(goal)
            }
        },1)
    }
    },

    data() {
        return {

        }
    }
}

</script>


<style scoped>
span {
    color: #30c39e;
    font-size: 35px;
    font-weight: bold;
}

p {
    font-size: 24px;
    font-weight: 500;
}

@media(max-width:768px) {
    .s {
        flex-direction: column;
    }
}
</style>