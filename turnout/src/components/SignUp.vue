<template>
    <div class="">
        <h3>Create a new Account</h3> 
        <div class="form-group">
            <input class="form-control t-box" type="text" placeholder="Email" v-model="email" >
            <input class="form-control t-box" type="password" placeholder="Password" v-model="password" >
            <button class="btn btn-primary" @click="SignUp">Sign Up</button>
        </div>
        <br>
        <br>
        <p>{{error.message}}</p>
        <router-link to="/SignIn">Already a user? SignIn</router-link>
         
    </div>
</template>
<script>
import { firebaseApp } from '../firebaseApp.js';
export default {
    
    data(){
       return{
           email:'',
           passwoord:'',
            error:{
                message:''
            },
            isSuccess:true

       }

    },
    methods:{
        SignUp(){
            firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
            .catch(error => {
                this.error = error
            })
        }

    }
}
</script>