<template>
  <v-app>
    <Header></Header>
    <!-- <Course></Course>
     -->
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "./components/header";
// import Course from './components/Course.vue'
export default {
  data: () => ({}),
  components: {
    Header,
    // Course
  },
};
</script>
