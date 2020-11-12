<template>
    <div class="">
        Events section
        <button class="btn btn-danger btn-sm sign-out" @click=signOut>Sign Out</button>
       <br>
        {{$store.state.user.uid}}
    </div>
</template>
<script>
import {firebaseApp} from '../firebaseApp'
export default {
    methods:{
        signOut(){
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()

        }
    }
}
</script>