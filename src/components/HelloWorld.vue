<template>
  <div class="arrow"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arrow {
    width: 24px;
    height: 24px;
    background: url('../assets/arrw.svg')
}
</style>
