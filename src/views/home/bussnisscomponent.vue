<template>
    <div class="bussniss">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <span class="text-muted">OWN BUSINESS</span>
                    <h2>We help innovators bring their business to life.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi. Distinctio accusantium fugit odit? Fugit ipsam. Sed ac fringilla ex. Nam mauris velit, ac cursus quis, non leo.</p>
                    <div class="btns-groub">
                        <button class="btn">See How →</button>
                        <button class="btn">Get a Quote</button>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="banner">
                        <img src="@/assets/banner.png" alt="Banner">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>



<style scoped>
.bussniss{
    line-height:35px;
    padding:20px;
}
.container{
    padding-top: 40px;
}
.btns-groub button:last-child , .btns-groub button:first-child:hover{
    margin-left: 5px;
    border: none;
    outline: none;
    background-color: #30c39e;
    color: white;
    padding:10px 20px;
}
.banner{
    width:100%;
}
.banner img{
    width:100%;
}
@media(max-width:768px){
    .banner img{
        margin-top: 10px;
    }
    .bussniss{
    padding:0px;
}
.container{
    padding-top:0px;
}
}
</style>