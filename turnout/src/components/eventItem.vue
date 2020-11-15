<template>
<div class="card-columns">
    <div class="card bg-warning" v-for="(event,index) in this.eventsArray" :key=index>
        <h4 class="card-title">{{event.title}}</h4>
        <p class="card-text">{{event.description}}</p>
        

    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            eventsArray:this.$store.state.events
        }
    }
}
</script>