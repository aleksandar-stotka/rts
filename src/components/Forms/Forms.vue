<template>
  <div>
    <form @submit.prevent="setSubmit">
      <div class="form-group">
        <label for="mail">YOUR EMAIL:</label>
        <input class="p-2" type="text" id="mail" name="email" v-model="setMail" />
      </div>
      <div class="form-group">
        <label for="password">PASSWORD:</label>
        <input
          class="p-2"
          type="text"
          id="password"
          name="password"
          v-model="setPassword"
        />

        <p v-if="invalidInput">load this submit</p>
        <button>submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setMail: "",
      setPassword: "",
      invalidInput: false,
    };
  },
  methods: {
    setSubmit() {
      if (this.setMail === "" || !this.setPassword === "") {
        this.invalidInput = !this.invalidInput;
        return;
      }
      fetch("https://http-vue-stotka-default-rtdb.firebaseio.com/amadues.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.setMail,
          password: this.setPassword,
        }),
      });
      (this.setMail = ""), (this.setPassword = "");
    },
  },
};
</script>

<style scoped>
.form-group {
  width: 40rem;
  padding: 2px;
  box-shadow: 0px 3px 8px;
  margin: 2rem auto;
}
</style>
