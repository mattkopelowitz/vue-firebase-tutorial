<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import {getAuth, signOut} from 'firebase/auth'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.replace('login');
      }).catch((error) => {
        console.error('Error signing out: ', error);
      });
    }
  }
}
</script>
