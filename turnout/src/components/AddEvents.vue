<template>
<div class="">
    <h3>Add new Events <input type="checkbox" v-model="showEvents"/></h3>
<form v-if="showEvents">
  <div class="form-group">
    <label>Title</label>
    <input type="text" class="form-control" v-model="event.title">
  </div>
  <div class="form-group">
    <label>Description</label>
    <input type="text" class="form-control" v-model="event.description">
  </div>
  <div class="form-group">
    <label>Date</label>
    <input type="date" class="form-control" v-model="event.date">
  </div>
    <div class="form-group">
    <label>Location</label>
    <input type="text" class="form-control" v-model="event.date">
  </div>
  <button type="submit" class="btn btn-primary" @click="AddEvent">Submit</button>
</form>

</div>
    
</template>
<script>
import { eventsRef } from "..//firebaseApp.js";
export default {
    data(){
        return{
            event:{
                title:'',
                description:'',
                date:'',
                location:'',
                email:''

            },
            showEvents:false
        }
    },
    methods:{
        AddEvent(){
            this.event.email=this.$store.state.user.email
            eventsRef.push(this.event)

        }
    }
}
</script>