<template>
    <div class='workwith py-5'>
        <div class='container'>
            <div class='row'>
                <div class='col-lg-6 col-md-12 col-sm-12'>
                    <div class='left'>
                        <h2>Who we Work with</h2>
                        <p>Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est.
                            Quisque ut lectus consequat, venenatis eros et, sed commodo risus. Nullam sit amet laoreet
                            elit. Suspendisse non init magnaa velit efficitur, dolor eget ex fermentum.</p>
                        <button class='btn'>Read more</button>
                    </div>
                </div>
                <div class='col-lg-6 col-md-12 col-sm-12'>
                    <div class='right'>
                        <div class='row'>
                            <div class='col-lg-6 col-md-12 col-sm-12 p-3'>
                                <div class='img'>
                                    <img src='@/assets/tags.png' alt='' />
                                    <p>Start Up Business</p>
                                </div>
                            </div>
                            <div class='col-lg-6 col-md-12 col-sm-12 p-3'>
                                <div class='img'>
                                    <img src='@/assets/team.png' alt='' />
                                    <p>Start Up Business</p>
                                </div>
                            </div>
                            <div class='col-lg-6 col-md-12 col-sm-12 p-3'>
                                <div class='img'>
                                    <img src='@/assets/support.png' alt='' />
                                    <p>Start Up Business</p>
                                </div>
                            </div>
                            <div class='col-lg-6 col-md-12 col-sm-12 p-3'>
                                <div class='img'>
                                    <img src='@/assets/backup.png' alt='' />
                                    <p>Start Up Business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.workwith {
    background-color: #f7f7f7 !important;
}

.btn {
    background-color: #30c39e;
    color: white;
    padding: 15px 25px;
}

.left {
    line-height: 60px;
}

.left p {
    line-height: 40px;
}

h2 {
    font-size: 50px;
}

.img {
    background-color: white;
    padding: 35px;
    border-radius: 10px;
    text-align: center;
}

.img p {
    font-weight: 400;
    font-size: 30px;
    margin-top: 20px;
}

.img p:hover {
    color: #30c39e;
    cursor: pointer;
}
</style>