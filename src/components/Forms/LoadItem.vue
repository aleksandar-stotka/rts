<template>
  <div>
    <section>
      <li>
        <P class="highlight">PASSWORD{{ password }}</P>
      </li>
      <li>
        <p>EMAIL{{ email }}</p>
      </li>
    </section>
  </div>
</template>

<script>
export default {
  props: ["password", "email"],
  method: {
    colorRaiting() {},
  },
};
</script>

<style scoped></style>
