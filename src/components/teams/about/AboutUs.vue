<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4">
        <img :src="image" />
        <div class="animation">
          <button class="btn col-md-2 mb-5" @click="showTeam">OUR TEAM</button>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
              id="pot"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>

          <button class="btn col-md-2 mb-5" @click="showTeam">OUR USERS</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      image:
        "https://static6.depositphotos.com/1003034/630/i/600/depositphotos_6307995-stock-photo-funny-robot-stay-show-hello.jpg",
      img2:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_504271344_205161.jpg",
    };
  },
  methods: {
    showTeam() {
      this.$router.push("/teams");
    },
    submitForm() {
      fetch("https://http-vue-stotka-default-rtdb.firebaseio.com/rambo.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: this.userName,
          setpassword: this.password,
        }),
      });
    },
  },
};
</script>

<style scoped>
.img {
  width: 30rem;
}

.img2 {
  width: 35rem;
}

.btn {
  padding: 0.3em;
  font-size: 2em;
  color: rgb(64, 64, 138);
  font-family: "Acme", sans-serif;
}
.btn:hover {
  color: blue;
}
#pot {
  bottom: 15%;
  position: absolute;
  -webkit-animation: linear infinite;
  -webkit-animation-name: run;
  -webkit-animation-duration: 5s;

  color: red;
}

.animation {
  display: flex;
  justify-content: space-between;
}
@-webkit-keyframes run {
  0% {
    left: 0;
  }
  48% {
    -webkit-transform: rotateY(0deg);
  }
  50% {
    left: calc(90% - 20px);
    -webkit-transform: rotateY(140deg);
  }
  98% {
    -webkit-transform: rotateY(180deg);
  }
  100% {
    left: 0;
    -webkit-transform: rotateY(0deg);
  }
}
</style>
