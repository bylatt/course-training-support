<!-- BookingForm.vue -->
<template>
    <div>
      <h2>Booking Form</h2>
      <form @submit.prevent="book">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" v-model="phoneNumber" @input="formatPhoneNumber">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div>
          <label for="company">Company Name:</label>
          <input type="company" id="company" v-model="formData.company" required>
        </div>
        <div>
      <label for="acceptTerms">
        <input type="checkbox" id="acceptTerms" v-model="acceptTerms">
        Accept Terms and Conditions
      </label>
    </div>
    <button :disabled="!acceptTerms" @click="book">Book Now</button>
        
      </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      acceptTerms: false,
      formData: {
          name: '',
          email: '',
          phoneNumber: '',
          company: '',
        },
    };
  },
  methods: {
    book() {
      // Handle booking logic here
      console.log('Booking confirmed!');

      api.getCourses().then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
    console.log(api)

    },
  },
};
</script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>