<template>
    <div>
        <!--Div Knowlodge Page-->
        <div class="d-flex justify-content-between py-5 px-3 mb-2 Knowlodge">
            <div>
                <h1>About US</h1>
            </div>
            <div>
                <p class="h5"><span id="home">Home</span> → About us</p>
            </div>
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
                            <p class="text-muted" id="p">Lorem ipsum dolor sit amet, suscipit totam animi consequatur
                                saepe Ea consequuntur .Ea consequuntur illum facere aperiam sequi optio consectetur
                                adipisicing elit fuga, Sed ac fringilla ex. Nam mauris velit, ac cursus quis, non leo
                                placerat libero non, dapibus leo.</p>
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
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="dev">
                            <div class="spef">
                                <h1>Meet with us to success dream business</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 py-5 px-4">
                        <div class="design d-flex align-baseline">
                            <div><i class="far fa-edit"></i></div>
                            <div class="mx-3">
                                <h4>Design & Developing</h4>
                                <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                                    adipisicing elit.</p>
                            </div>

                        </div>
                        <div class="design d-flex align-baseline mt-4">
                            <div><i class="far fa-edit"></i></div>
                            <div class="mx-3">
                                <h4>Design & Developing</h4>
                                <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                                    adipisicing elit.</p>
                            </div>

                        </div>
                        <div class="design d-flex align-baseline mt-4">
                            <div><i class="far fa-edit"></i></div>
                            <div class="mx-3">
                                <h4>Design & Developing</h4>
                                <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                                    adipisicing elit.</p>
                            </div>

                        </div>
                        <div class="design d-flex align-baseline mt-4">
                            <div><i class="far fa-edit"></i></div>
                            <div class="mx-3">
                                <h4>Design & Developing</h4>
                                <p>Lorem ipsum dolor sit amet, Ea consequuntur illum facere aperiam sequi optio
                                    adipisicing elit.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End Develped-->
        <!--Start Responsive rogress bar-->
        <div class="bar">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <div>
                            <h2>Responsive designs that will fit in any website</h2>
                            <p>Lorem ipsum dolor sit amet, suscipit totam animi consequatur saepe Ea consequuntur. Lorem
                                ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <p>Pixel perfect design</p>
                                <p>80%</p>
                            </div>
                            <div class="progress ">
                                <div class="progress-bar" aria-valuemin="80" role="progressbar"></div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <p>Responsive Web design</p>
                                <p>95%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" aria-valuemin="95" role="progressbar" @before-appear="enter">
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <p>Marketing Management</p>
                                <p>70%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" aria-valuemin="70" role="progressbar"></div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex justify-content-between align-items-center">
                                <p>Web Development</p>
                                <p>85%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" aria-valuemin="85" role="progressbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End Responsive rogress bar-->

        <!--goals-->
        <div class="goals">
            <div class="speff">
                <p>CREATIVITY GOALS</p>
                <h2>We conceive and translate our clients dreams into reality.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                <div class="btns">
                    <button class="btn">Read more</button>
                    <button class="btn">Get a quote</button>
                </div>
            </div>
        </div>
        <!--goals-->

        <div class="skills text-center">
            <h2>Skilled team</h2>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="skill">
                            <div class="overlay">
                                <div class="d-flex justify-content-center align-items-center ff">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-google-plus-g"></i>
                                </div>
                            </div>
                            <div>
                                <img src="@/assets/team3.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="skill">
                            <div class="overlay">
                                <div class="d-flex justify-content-center align-items-center ff">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-google-plus-g"></i>
                                </div>
                            </div>
                            <div>
                                <img src="@/assets/team2.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="skill">
                            <div class="overlay">
                                <div class="d-flex justify-content-center align-items-center ff">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-google-plus-g"></i>
                                </div>
                            </div>
                            <div>
                                <img src="@/assets/team3.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <div class="skill">
                            <div class="overlay">
                                <div class="d-flex justify-content-center align-items-center ff">
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-google-plus-g"></i>
                                </div>
                            </div>
                            <div>
                                <img src="@/assets/team2.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#home {
    color: #30c39e;
}

#p {
    line-height: 35px;
}

.industry .left {
    line-height: 45px
}

.industry .right img {
    width: 100%;
    border-radius: 10px;
}

.develob,
.Knowlodge {
    background-color: #f7f7f7;
}

.develob .dev {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(@/assets/bg.jpg);
    background-size: cover;
    width: 100%;
    height: 100%;
    height:80vh;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    position: relative;
}

.spef {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 80%;
}
.speff{
    color: white;
}

.s {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
}

.progress {
    height: 10px;
}

.p {
    transition: 2s;
}

.progress-bar {
    background-color: #30c39e;
    height: 410px;
    /* transition: 5s; */
}

.bar {
    padding-top: 150px;
    padding-bottom: 150px;
}

.goals {
    width: 100%;
    height: 60vh;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(@/assets/about.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    position: relative;
}

.goals .speff button:first-child {
    background-color: #30c39e;
    padding: 10px 20px;
    margin-right: 10px;
    color: white;
}

.goals .speff button:last-child {
    background-color: white;
    padding: 10px 20px;
    margin-right: 10px;
    color: #30c39e;
}

.skills {
    background-color: #f7f7f7;
    padding: 80px;
}

.skills img {
    width: 100%
}

.skills .skill {
    position: relative;
}

.skills .skill .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
}
.skills .skill .overlay .ff{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.skills .skill .overlay i {
    width: 50px;
    height: 50px;
    background-color: rgba(157, 157, 157, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: 0.3s all ease;
    margin: 5px;
}

.skills .skill .overlay i:hover {
    color: #30c39e;
    background-color: white;
}

@media(max-width:768px) {
    .s {
        flex-direction: column;
    }
    .develob .dev{
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(@/assets/bg.jpg);
    background-size: cover;
    width:100%;
    height:350px;
}
.goals .speff .btns{
    display: flex;

}
.goals .speff .btns button{
    padding:5px;
    font-size: 10px;;
}
}
@media(min-width:768px) , (max-width:992px) {
    .develob .dev{
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(@/assets/bg.jpg);
    background-size: cover;
    width:100%;
    }
}
</style>

<script>
export default {
    mounted() {
        let bars = document.querySelectorAll('.progress-bar')
        let bar = document.querySelector('.bar')
        window.addEventListener('scroll', () => {
            if (window.scrollY >= bar.offsetTop) {
                bars.forEach((el) => {
                    let value = el.getAttribute('aria-valuemin');
                    el.style.width = value + "%"
                    el.classList.add('p')
                    // el.style.transition = `width 1s linear`
                })
            } else {
                bars.forEach((el) => {
                    el.style.width = 0;
                })
            }
        })
        let elemnts = document.querySelectorAll('.skill');
        elemnts.forEach((el) => {
            el.addEventListener('mouseover', () => {
                el.firstElementChild.style.display = 'block';
            })
            el.addEventListener('mouseout', () => {
                el.firstElementChild.style.display = 'none';
            })
        })
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>