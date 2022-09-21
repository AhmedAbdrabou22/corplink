<template>
        <div class="sponser mt-5 py-5">
            <div class="container d-flex justify-content-evenly align-items-center mt-3  spon">
                <div>
                    <img src="@/assets/logo1.png" alt="">
                </div>
                <div>
                    <img src="@/assets/logo2.png" alt="">
                </div>
                <div>
                    <img src="@/assets/logo3.png" alt="">
                </div>
                <div>
                    <img src="@/assets/logo4.png" alt="">
                </div>
                <div>
                    <img src="@/assets/logo5.png" alt="">
                </div>
                <div>
                    <img src="@/assets/logo1.png" alt="">
                </div>
            </div>
        </div>
</template>

<script>

</script>

<style scoped>
.sponser {
    background-color: white;
}

@media(max-width:768px) {
    .spon {
        flex-direction: column;
    }
    .spon div{
        margin-top:50px;
    }
}
</style>