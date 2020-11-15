<template>
    <div class="">  
        <button class="btn btn-danger btn-sm sign-out" @click=signOut>Sign Out</button>
       <br>
        <AddEvents></AddEvents>
       <event-item></event-item>
    </div>
</template>
<script>
import {firebaseApp, eventsRef} from '../firebaseApp'
import AddEvents from './AddEvents.vue'
import eventItem from './eventItem.vue'
export default {
    methods:{
        signOut(){
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()

        }
    },
    components:{
        AddEvents,
        eventItem
    },
    mounted(){
        eventsRef.on('value',snap =>{
            let events =[]
            snap.forEach(event => {
                events.push(event.val())
                this.$store.dispatch('setEvents',events)
            })
        })
    }
}
</script>