<template>
    <div class="social mt-5 py-5">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center k">
                <div>
                    <p>Don’t miss to follow us on our Social networks.</p>
                </div>
                <div class="d-flex justify-content-center align-items-center links">
                    <div><i class="fa-brands fa-facebook-f"></i></div>
                    <div><i class="fa-brands fa-twitter"></i></div>
                    <div><i class="fa-brands fa-google-plus-g"></i></div>
                    <div><i class="fab fa-invision"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.social {
    background-color: #f7f7f7 !important;
}

p {
    font-size: 25px;
    font-weight: 500;
}
.links div{
    width:50px;
    height:40px;
    background-color: white;
    text-align: center;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    padding:20px;
}
.links div i{
    font-size:25px;
}
.links div:first-child{
    color: blue;
    transition: 0.2s all ease;
}
.links div:first-child:hover{
    background-color: blue;
    color: white;
}
.links div:nth-child(2){
    color: #1da1f2;
    transition: 0.2s all ease;
}
.links div:nth-child(2):hover{
    background-color: #1da1f2;
    color: white;
}
.links div:nth-child(3){
    color: #dd4b39;
    transition: 0.2s all ease;
}
.links div:nth-child(3):hover{
    background-color: #dd4b39;
    color: white;
}
.links div:nth-child(4){
    color: #0077b5;
    transition: 0.2s all ease;
}
.links div:nth-child(4):hover{
    background-color: #0077b5;
    color: white;
}
@media(max-width:768px){
    .k{
        flex-direction: column;
    }
}
</style>