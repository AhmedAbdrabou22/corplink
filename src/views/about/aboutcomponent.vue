<template>
    <div>
        <!--Div Knowlodge Page-->
        <div class="d-flex justify-content-between py-5 px-3 mb-2 Knowlodge">
            <div><h1>About US</h1></div>
            <div><p class="h5"><span id="home">Home</span> → About us</p></div>
        </div>
        <!--End div knowledge-->

        <!--div industry-->
        <div class="industry">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="left p-3">
                            <p class="text-muted">WHO WE ARE</p>
                            <b class="h1">We have 25+ years of industry experience.</b>
                            <p class="text-muted mt-3">OUR ONLY AIM, HAPPY CLIENTS.</p>
                            <p class="text-muted" id="p">Lorem ipsum dolor sit amet, suscipit totam animi consequatur saepe Ea consequuntur .Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit fuga, Sed ac fringilla ex. Nam mauris velit, ac cursus quis, non leo placerat libero non, dapibus leo.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="right">
                            <img src="@/assets/about.jpg" alt="about">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End div industry-->

        <!--Start Develped-->
        <div class="develob">
            <div class="container py-4">
                <div class="row s shadow">
                    <div class="col-6">
                        <div class="dev">
                            <div class="spef"><h1>Meet with us to success dream business</h1></div>
                        </div>
                    </div>
                    <div class="col-6 py-5 px-4">
                        <div class="design d-flex align-baseline">
                            <div><i class="far fa-edit"></i></div>
                            <div class="mx-3">
                                <h4>Design & Developing</h4>
                                <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio adipisicing elit.</p>
                            </div>

                        </div>
                        <div class="design d-flex align-baseline mt-4">
                            <div><i class="far fa-edit"></i></div>
                            <div class="mx-3">
                                <h4>Design & Developing</h4>
                                <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio adipisicing elit.</p>
                            </div>

                        </div>
                        <div class="design d-flex align-baseline mt-4">
                            <div><i class="far fa-edit"></i></div>
                            <div class="mx-3">
                                <h4>Design & Developing</h4>
                                <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio adipisicing elit.</p>
                            </div>

                        </div>
                        <div class="design d-flex align-baseline mt-4">
                            <div><i class="far fa-edit"></i></div>
                            <div class="mx-3">
                                <h4>Design & Developing</h4>
                                <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio adipisicing elit.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End Develped-->
</div>
</template>

<style scoped>
    #home{
        color: #30c39e;
    }
    #p{
        line-height: 35px;
    }
    .industry .left{
        line-height: 45px
    }
    .industry .right img{
        width: 100%;
        border-radius: 10px;
    }
    .develob , .Knowlodge{
        background-color:#f7f7f7;
    }
    .develob .dev{
        background-image:linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(@/assets/bg.jpg);
        background-size: cover;
        width: 100%;
        height:100%;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        background-position: center;
        position: relative;
    }
    .spef{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color:white;
        width:80%;
    }
    .s{
        background-color: white;
        padding:15px;
        border-radius: 10px;
    }
    @media(max-width:768px){
        .s{
            flex-direction: column;
        }
    }
</style>