<template>
    
    <div class="">
        <h3>Sign In </h3> 
        <div class="form-group">
            <input class="form-control" type="text" placeholder="Email" v-model="email" >
            <input class="form-control" type="password" placeholder="Password" v-model="password" >
            <button class="btn btn-primary" @click="signIn">Sign in</button>
            <br>
            <br>
            <p>{{error.message}}</p>
        </div>
         
    </div>
</template>
<script>
import { firebaseApp } from '../firebaseApp.js'

export default {
    data(){
        return{
            email:'',
            password:'',
            error:{
                message:''
            }
        }
    },
    methods:{
        signIn(){
            firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
            .catch(error => {
                this.error = error
            })
        }
    }
}
</script>