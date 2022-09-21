<template>
    <div>
        <bussnisscomponent/>
        <featurecomponent/>
        <successcomponent/>
        <standardcomponent/>
        <works/>
        <workwith/>
        <sponser/>
        <socila/>
    </div>
</template>


<script>
    import bussnisscomponent from '../home/bussnisscomponent.vue'
    import featurecomponent from '../home/featurecomponent.vue'
    import successcomponent from '../home/successcomponent.vue'
    import standardcomponent from '../home/standard.vue'
    import works from '../home/works.vue'
    import workwith from '../home/workwith.vue'
    import sponser from '../home/sponser.vue'
    import socila from '../home/social.vue'
    export default{
        data(){
            return{
            }
        },
        components:{bussnisscomponent , featurecomponent , successcomponent ,standardcomponent ,works , workwith ,sponser , socila}
    }
</script>