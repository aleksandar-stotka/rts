<template>
  <div class="container">
    <h3>{{ name }}</h3>

    <div class="team-members">{{ memberCount }} Members</div>

    <router-link :to="toogleId">View Members</router-link>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "memberCount"],

  computed: {
    toogleId() {
      return "/teams/" + this.id; //metod za
    },
  },
};
</script>
`

<style scoped>
p {
  color: black;
}

a {
  text-decoration: none;
  color: rgb(250, 241, 241);
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #c6c0d4;
  text-decoration: none;
}
.team-members {
  margin: 0.5rem;
}
h3 {
  color: #5c0036;
}
</style>
