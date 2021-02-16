<template>
  <div>
    <header>
      <b-navbar toggleable="lg" type="dark" variant="">
        <router-link class="ml-5" to="/about">HOME</router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link to="/users">USERS</router-link>
            <router-link to="/teams">TEAMS</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <p>MICROBI</p>
              <img :src="image" class="img" />
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: "https://thumbs.dreamstime.com/z/white-robot-sit-laptop-19714418.jpg",
    };
  },
};
</script>

<style scoped>
header {
  background: #316490;
}
.navbar a {
  float: left;
  display: block;
  color: #f7eef1;
  text-align: center;
  padding: 0.5em;
  text-decoration: none;

  font: inherit;
}

a {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: black;
  padding: 1em;
  display: inline-block;
  text-decoration: none;
  font-size: 25px;
  box-shadow: 0px 3px 7px;

  margin: 1.5rem;
}
a:hover,
a:active,
a.router-link-active {
  color: #808040;
  border-color: #00ffff;
  background-color: #c0c0c0;
  text-decoration: none;
}

.img {
  width: 7rem;
  padding: 0.3em;
  margin: 0.5em;
  border-radius: 50px;
}
</style>
