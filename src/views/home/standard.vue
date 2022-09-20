<template>
    <div class="standard">
        <div class="container">
            <div class="row py-4">
                <div class="col-lg-5 col-md-12 col-sm-12">
                    <div class="standardbussiness">
                        <h2>We create a new standard for businesses</h2>
                        <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem tenetur consequatur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                        <ul>
                            <li class="text-muted">
                                <i class="fas fa-check"></i>
                                Pharetra massa init ultricies labore
                            </li>
                            <li class="text-muted">
                                <i class="fas fa-check"></i>
                                Dolore magna aliqua init sodales tempor
                            </li>
                            <li class="text-muted">
                                <i class="fas fa-check"></i>
                                Incididunt ut labore et, pharetra massa
                            </li>
                        </ul>

                        <button class="btn">Read more</button>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-3">
                            <div class="info">
                                <img src="@/assets/slack.png" alt="" class="w-100">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-3">
                            <div class="info">
                                <img src="@/assets/amazon.png" alt="" class="w-100">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-3">
                            <div class="info">
                                <img src="@/assets/netflix.png" alt="" class="w-100">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-3">
                            <div class="info">
                                <img src="@/assets/github.png" alt="" class="w-100">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-3">
                            <div class="info">
                                <img src="@/assets/chimp.png" alt="" class="w-100">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-3">
                            <div class="info">
                                <img src="@/assets/disney.png" alt="" class="w-100">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-3">
                            <div class="info">
                                <img src="@/assets/flipkart.png" alt="" class="w-100">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-3">
                            <div class="info">
                                <img src="@/assets/woocomerce.png" alt="" class="w-100">
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-3">
                            <div class="info">
                                <img src="@/assets/amazon.png" alt="" class="w-100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
.standard{
    background-color: #f7f7f7;
}
button{
    padding:10px 20px;
    background-color: #30c39e;
    color: white;;
}
ul {
    list-style: none;
}
ul li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: -45px;
    font-weight: 700;
}
.info{
    background-color: white;
    border-radius: 10px;
    padding:10px;
}
.standardbussiness{
    line-height: 50px;
}
</style>