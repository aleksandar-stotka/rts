<template>
  <div>
    <ul>
      <team-item
        v-for="team in teams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        :member-count="team.members.length"
      ></team-item>
    </ul>
    <div class="d-flex justify-content-around m-3">
      <div class="box1 p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet nulla
        cumque, rerum mollitia quis nisi optio voluptatem, repellat quas excepturi ad
        itaque error libero fugiat. Repellat nemo minima ab. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quos eveniet nulla cumque, rerum mollitia quis nisi
        optio voluptatem, repellat quas excepturi ad itaque error libero fugiat. Repellat
        nemo minima ab.
        <button>back</button>
      </div>
      <div class="p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet nulla
        cumque, rerum mollitia quis nisi optio voluptatem, repellat quas excepturi ad
        itaque error libero fugiat. Repellat nemo minima ab. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Cupiditate, dolor? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quos eveniet nulla cumque, rerum mollitia quis nisi
        optio voluptatem, repellat quas excepturi ad itaque error libero fugiat. Repellat
        nemo minima ab. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate, dolor?
      </div>
      <div class="p-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet nulla
        cumque, rerum mollitia quis nisi optio voluptatem, repellat quas excepturi ad
        itaque error libero fugiat. Repellat nemo minima ab.
      </div>
    </div>
  </div>
</template>

<script>
import TeamItem from "./TeamItem.vue";
export default {
  components: {
    TeamItem,
  },
  inject: ["teams"],
};
</script>

<style>
.container {
}
.box1 {
  background: blue;
}
</style>
