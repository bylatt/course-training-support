<!-- BookingForm.vue -->
<template>
    <div>
      <h2>Booking</h2>
      <h2>Class Name:</h2>

      <form @submit.prevent="book">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div>
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" v-model="formData.phoneNumber" @input="formatPhoneNumber">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div>
          <label for="company">Company Name:</label>
          <input type="company" id="company" v-model="formData.company">
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
import * as api from '../api.js'
import { ref, onMounted } from 'vue'

export default {

    mounted() {
    api.getClassName('LzavWkfZAw1sqS4Hibz5').then(result => {
        this.className = result
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
    console.log(api)
    console.log('mounted')
  },
  data() {
    return {
      acceptTerms: false,
      formData: {
          name: '',
          email: '',
          phoneNumber: '',
          company: '',
          classId: '',
          className: '',
        },
    };
  },
  methods: {
    book() {
      // Handle booking logic here
      console.log(this.formData);

      api.submitBooking('LzavWkfZAw1sqS4Hibz5').then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })

    },
  },
};
</script>
  
  <style scoped>
  /* Add your CSS styles here */
  </style>