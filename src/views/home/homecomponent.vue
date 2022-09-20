<template>
    <div>
        <bussnisscomponent/>
        <featurecomponent/>
        <successcomponent/>
        <standardcomponent/>
    </div>
</template>


<script>
    import bussnisscomponent from '../home/bussnisscomponent.vue'
    import featurecomponent from '../home/featurecomponent.vue'
    import successcomponent from '../home/successcomponent.vue'
    import standardcomponent from '../home/standard.vue'
    export default{
        data(){
            return{
            }
        },
        components:{bussnisscomponent , featurecomponent , successcomponent ,standardcomponent}
    }
</script>