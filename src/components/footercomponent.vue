<template>
    <div class="py-5 footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div>
                        <h3 class="text-light">Contact information</h3>
                        <p class="text-muted">Address: #135 block, Barnard St. Brooklyn</p>
                        <p><a href="tel:+01125178289" style="text-decoration:none;" class="text-muted">Phone :+20 1125178289</a></p>
                        <p class="text-muted">Mail: aabdrabou819@gmail.com</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="text-center">
                        <h3 class="text-light">Company</h3>
                        <ul class="mt-3">
                            <li class="text-muted">About company</li>
                            <li class="text-muted">Latest Blog Posts</li>
                            <li class="text-muted">Our Services</li>
                            <li class="text-muted">Job Opportunities</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="text-center">
                        <h3 class="text-light">Quick Links</h3>
                        <ul class="mt-3">
                            <li class="text-muted">Get in touch</li>
                            <li class="text-muted">Create account</li>
                            <li class="text-muted">Careers</li>
                            <li class="text-muted">Site Feedback</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="text-center">
                        <h3 class="text-light">Categories</h3>
                        <ul class="mt-3">
                            <li class="text-muted">Creative tech</li>
                            <li class="text-muted">General info</li>
                            <li class="text-muted">Valuable Insights</li>
                            <li class="text-muted">Our Events</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footer{
        background-color: #1e1b32;
    }
    ul{
        list-style: none;
        text-align: left;
        cursor: pointer;
    }
    ul li{
        margin-top:15px;
        margin-left: 50px;
        cursor: pointer;
    }
    @media(max-width:768px){
        ul{
            text-align: start;
        }
        h3{
            text-align: start;
        }
        ul li{
        margin-top:15px;
        margin-left:-10px;
        cursor: pointer;
        font-size: 13px;
    }
    }
</style>