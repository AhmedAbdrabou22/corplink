<template>
    <div class="mt-5 py-5">
        <div class="text-center">
            <span class="text-muted">ACHIEVE ONLINE SUCCESS</span>
            <h1 class="mt-3">Guiding your business</h1>
        </div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="guiding text-center  p-4">
                        <i class="fas fa-microphone"></i>
                        <h3>Mission Statement</h3>
                        <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus
                            orci.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="guiding text-center shadow p-4">
                        <i class="fas fa-chart-bar"></i>
                        <h3>Situation Analysis</h3>
                        <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus
                            orci.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="guiding text-center  p-4">
                        <i class="fas fa-microphone"></i>
                        <h3>Marketing Strategy</h3>
                        <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus
                            orci.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
setTimeout(() => {
    let guiding = document.querySelectorAll('.guiding')
    guiding.forEach((guide) => {
        guide.addEventListener('mouseover',()=>{
            guiding.forEach((g)=>{
                g.classList.remove('shadow')
            })
            guide.classList.add('shadow')
        })
    })
}, 100)
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.guiding i {
    font-size: 25px;
    margin: auto;
}
</style>