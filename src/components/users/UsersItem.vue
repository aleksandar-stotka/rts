<template>
  <div class="">
    <ul>
      <h3>{{ name }}</h3>

      <div class="role" :class="changeRole">
        {{ role }}
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["name", "role"],
  computed: {
    changeRole() {
      if (this.role === "ingener") {
        return "role--ingener";
      }
      if (this.role === "consultant") {
        return "role--consultant";
      }
      return null;
    },
  },
};
</script>

<style scoped>
ul {
  margin-top: 5rem;
}
.role {
  border-radius: 10px;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #413963;
}
.role--ingener {
  background: red;
  color: rgb(88, 128, 163);
  letter-spacing: 1px;
}
.role--consultant {
  background: peru;
  color: #413963;
}
h3 {
  color: rgb(177, 47, 47);
}
</style>
