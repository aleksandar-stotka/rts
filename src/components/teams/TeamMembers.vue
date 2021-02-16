<template>
  <section>
    <h3>{{ teamName }}</h3>

    <ul>
      <users-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      >
      </users-item>
      <button @click="backBtn">back to teams</button>
    </ul>
  </section>
</template>

<script>
import UsersItem from "../users/UsersItem.vue";
export default {
  inject: ["users", "teams"],
  components: {
    UsersItem,
  },
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  methods: {
    backBtn() {
      this.$router.push("/teams");
    },
  },

  created() {
    const teamid = this.$route.params.teamid;
    const selectedTeam = this.teams.find((team) => team.id === teamid);
    const members = selectedTeam.members;
    const selectedMembers = [];
    for (const member of members) {
      const selectedUser = this.users.find((user) => user.id === member);
      selectedMembers.push(selectedUser);
    }
    this.members = selectedMembers;
    this.teamName = selectedTeam.name;
  },
};
</script>
<style scoped>
h3 {
  color: red;
  margin-left: 7rem;
  padding: 1em;
}
</style>
