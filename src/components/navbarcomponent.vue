<template>
    <nav class="navbar navbar-expand-lg navbar-light shadow p-4 sticky-top">
        <div class="container-fluid">
        <i class="far fa-newspaper logo__icon mx-2"></i>
            <a class="navbar-brand" href="#"><b>Corpo</b>Link</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <router-link :to="{name: 'home'}"><a class="nav-link" aria-current="page" href="#">Home</a>
                    </router-link>
                    <router-link :to="{name: 'about'}"><a class="nav-link" href="#">About</a></router-link>
                </ul>
                <form class="d-flex justify-content-center align-items-center">
                    <div class="btn">
                        <i class="fas fa-search search-icon"></i>
                    </div>
                    <div>
                        <button id="search" class="btn" type="submit">Search</button>
                    </div>
                    <div>
                        <i class="fas fa-moon"></i>
                    </div>
                </form>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
.far {
    color: #30c39e;
    font-size: 30px;
}

.navbar-brand {
    font-size: 30px;
}
nav{
    background-color: white;
}
.fas {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
    color: #30c39e;
}

.fa-search:hover {
    background-color: #30c39e;
    color: white;
}

#search {
    background-color: #30c39e;
    color: white;
    border: none;
    outline: none;
    padding: 1rem 2rem;
}

#search:hover {
    opacity: 0.8;
}

.fa-moon {
    color: gray;
    font-size: 2rem;
    cursor: pointer;
    transform: rotate(318deg);
}

</style>