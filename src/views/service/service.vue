<template>
    <div class="services">
        <!--Div Knowlodge Page-->
        <div class="d-flex justify-content-between py-5 px-3 mb-2 Knowlodge">
            <div>
                <h1>Our Services</h1>
            </div>
            <div>
                <p class="h5"><span id="home">Home</span> → Services</p>
            </div>
        </div>
        <!--End div knowledge-->

        <!--service With offer-->
        <div class="offer p-5">
            <h1 class="text-center">Services we offer</h1>
            <div class="offers mt-5">
                <div class="container">
                    <div class="row justify-content-around">
                    <div class="col-3 p-3">
                        <div class="offersone py-3 d-flex justify-content-center align-items-center">
                            <img src="@/assets/laptop.png" alt="">
                            <p>Web design & development</p>
                        </div>
                    </div>
                    <div class="col-3 p-3">
                        <div class="offersone py-3 d-flex justify-content-center align-items-center">
                            <img src="@/assets/mobile1.png" alt="">
                            <p>Web design & development</p>
                        </div>
                    </div>
                    <div class="col-3 p-3">
                        <div class="offersone py-3 d-flex justify-content-center align-items-center">
                            <img src="@/assets/android.png" alt="">
                            <p>Web design & development</p>
                        </div>
                    </div>
                    <div class="col-3 p-3">
                        <div class="offersone py-3 d-flex justify-content-center align-items-center">
                            <img src="@/assets/code.png" alt="">
                            <p>Web design & development</p>
                        </div>
                    </div>
                    <div class="col-3 p-3">
                        <div class="offersone py-3 d-flex justify-content-center align-items-center">
                            <img src="@/assets/iphone.png" alt="">
                            <p>Web design & development</p>
                        </div>
                    </div>
                    <div class="col-3 p-3">
                        <div class="offersone py-3 d-flex justify-content-center align-items-center">
                            <img src="@/assets/java.png" alt=""/>
                            <p>Web design & development</p>
                        </div>
                    </div>
                    <div class="col-3 p-3">
                        <div class="offersone py-3 d-flex justify-content-center align-items-center">
                            <img src="@/assets/chain.png" alt="">
                            <p>Web design & development</p>
                        </div>
                    </div>
                    <div class="col-3 p-3">
                        <div class="offersone py-3 d-flex justify-content-center align-items-center">
                            <img src="@/assets/program.png" alt="">
                            <p>Web design & development</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!--service With offer-->
    </div>
</template>


<style scoped>
    p{
        font-size: 25px;
        font-weight: bold;
        margin-left:5px;
    }
    .offersone{
        border: 1px solid gray;
        border-radius: 5px;
    }
    .offersone img{
        margin-left: -25px;
        padding:5px;
        width:50px;
        height: 50px;
        border-radius: 50%;
        background-color: white;
    }
</style>