<template>
  <div>Waiting list</div>

  <h1>Waiting List Form</h1>
  <form action="process.php" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required /><br /><br />

    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" required /><br /><br />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required /><br /><br />

    <input type="hidden" id="class_id" name="class_id" value="" />

    <button type="submit">Submit</button>
  </form>
</template>
