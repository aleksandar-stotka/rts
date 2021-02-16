<template>
  <div>
    <button @click="teamlist">click</button>
    <ul class="d-flex justify-content-around flex-wrap">
      <users-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></users-item>
    </ul>
  </div>
</template>

<script>
import UsersItem from "./UsersItem.vue";
export default {
  components: {
    UsersItem,
  },
  methods: {
    teamlist() {
      this.$router.push("/teams");
    },
  },
  inject: ["users"],
};
</script>
