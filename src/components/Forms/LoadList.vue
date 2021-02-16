<template>
  <div>
    <section>
      <ul>
        <load-item
          v-for="res in results"
          :key="res.id"
          :name="res.password"
          :email="res.email"
        ></load-item>
      </ul>

      <button @click="loadExpirients">load</button>
      <p>load expirients</p>
    </section>
  </div>
</template>

<script>
import LoadItem from "./LoadItem";
export default {
  components: {
    LoadItem,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    loadExpirients() {
      fetch("https://http-vue-stotka-default-rtdb.firebaseio.com/amadues.json")
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              emai: data[id].email,
            });
          }
          this.result = results;
        });
    },
  },
};
</script>
