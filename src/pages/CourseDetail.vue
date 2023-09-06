<template>
  <div>
    <h1>{{ greeting }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello, Vue!',
      message: 'Welcome to Vue.js single-file components.'
    };
  }
};
</script>

<style scoped>
/* Scoped CSS specific to this component */
h1 {
  color: blue;
}
p {
  font-weight: bold;
}
</style>