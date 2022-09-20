<template>
    <div class="feature mt-5 py-5">
        <div class="text-center">
            <span class="text-muted">ITERATIVE PROCESS</span>
            <h1 class="mt-3">Our Key features</h1>
        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="mobile">
                        <img src="@/assets/mobile.png" alt="Logo">
                    </div>
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12">
                    <div class="featureclouds">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                                <div class="backup backup1 d-flex align-baseline">
                                    <div>
                                        <img src="@/assets/backup.png" class="mx-3" alt="">
                                    </div>
                                    <div>
                                        <h3>Data Backup</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                                <div class="backup backup2 d-flex align-baseline">
                                    <div>
                                        <img src="@/assets/team.png" class="mx-3" alt="">
                                    </div>
                                    <div>
                                        <h3>Dedicated Team</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                                <div class="backup backup3 d-flex align-baseline">
                                    <div>
                                        <img src="@/assets/tags.png" class="mx-3" alt="">
                                    </div>
                                    <div>
                                        <h3>Quality Deliverance</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>  
                            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                                <div class="backup backup4 d-flex align-baseline">
                                    <div>
                                        <img src="@/assets//support.png" class="mx-3" alt="">
                                    </div>
                                    <div>
                                        <h3>Excellent Support</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
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
.feature {
    background-color: #f7f7f7;
}

.mobile {
    width: 100%;
    height: 100%;
}

.mobile img {
    width: 100%;
}
.backup{
    background-color: white;
    padding:15px;
    border-radius: 10px;
    line-height: 30px;
}
.backup4 , .backup1 , .backup2 , .backup3 {
    position: relative;
    transition: 0.5s all;
}
.backup1::before , .backup2::before ,.backup3::before , .backup4::before{
    content: "";
    position:absolute;
    bottom:0;
    left:0;
    width:0;
    height:0;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent; 
    transition: 0.8s all ease; 
}
.backup1::after , .backup2::after ,.backup3::after , .backup4::after{
    content: "";
    position:absolute;
    top:0;
    right:0;
    width:0;
    height:0;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    transition: 0.8s all ease;
}
.backup1:hover::after{
    position: absolute;
    border-color:red;
    width:99%;
    height:99%;
}
.backup1:hover::before{
    border-color:red;
    width:99%;
    height:99%;
}
.backup2:hover::after{
    position: absolute;
    border-color:green;
    width:99%;
    height:99%;
}
.backup2:hover::before{
    border-color:green;
    width:99%;
    height:99%;
}
.backup3:hover::after{
    position: absolute;
    border-color:blue;
    width:99%;
    height:99%;
}
.backup3:hover::before{
    border-color:blue;
    width:99%;
    height:99%;
}
.backup4:hover::after{
    position: absolute;
    border-color:#FE4E81;
    width:99%;
    height:99%;
}
.backup4:hover::before{
    border-color:#FE4E81;
    width:99%;
    height:99%;
}
@media(max-width:768px){
    .backup1{
        border-top: 2px solid red !important;
    }
    .backup2{
        border-top: 2px solid green;
    }
    .backup3{
        border-top: 2px solid blue;
    }
    .backup4{
        border-top: 2px solid #FE4E81;
    }
    .backup1:hover::after ,.backup2:hover::after , .backup3:hover::after , .backup4:hover::after{
    position: absolute;
    border-color:transparent;
    width:0;
    height:0;
}
.backup1:hover::before ,.backup2:hover::before , .backup3:hover::before , .backup4:hover::before{
    border-color:transparent;
    width:0;
    height:0;
}
}
</style>

