<template>
  <div>
    <h1>Waiting List Form</h1>

    <form @submit.prevent="handleSubmit">
      <label for="name">Name: </label>
      <input
        type="text"
        id="name"
        v-model="formData.name"
        required
      /><br /><br />

      <label for="phone">Phone: </label>
      <input
        type="tel"
        id="phone"
        v-model="formData.phone"
        required
      /><br /><br />

      <label for="email">Email: </label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        required
      /><br /><br />

      <label for="subscribe">
        <input type="checkbox" id="subscribe" v-model="formData.subscribe" />
        Yes, We'd love to keep in touch with exclusive offers and the latest
        information with ODD-E </label
      ><br /><br />

      <input type="hidden" id="class_id" v-model="formData.class_id" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        email: "",
        subscribe: false,
        class_id: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Make an API call or perform any other action on form submission
      // Example: POST request to process.php
      this.$http
        .post("process.php", this.formData)
        .then((response) => {
          console.log(response.data);
          // Handle the response from server
        })
        .catch((error) => {
          console.error(error);
          // Handle the error
        });
    },
  },
};
</script>

<style scoped>
/* You can add any styles here */
</style>
