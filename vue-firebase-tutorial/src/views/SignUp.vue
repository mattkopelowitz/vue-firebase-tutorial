<template>
    <div class="sign-up">
      <p>Let's create a new account!</p>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button @click="signUp">Sign Up</button>
      <span>or go back to <router-link to="/login">login</router-link>.</span>
    </div>
</template>

<script>
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    export default {
        name: 'signUp-screen',
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            signUp() {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password).then(
                    () => {
                        this.$router.replace('home');
                    }).catch((error) => {
                        alert('Oops. ' + error.message);
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .sign-up {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>
