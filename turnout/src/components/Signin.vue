<template>
    
    <div class="">
        <h3>Sign In </h3> 
        <div class="form-group">
            <input class="form-control t-box" type="text" placeholder="Email" v-model="email" >
            <input class="form-control t-box" type="password" placeholder="Password" v-model="password" >
            <button class="btn btn-primary" @click="signIn">Sign in</button>
            
            <br>
            <br>
            <p>{{error.message}}</p>
            <br>
            <router-link to="/SignUp">Not a user? SignUp!</router-link>
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