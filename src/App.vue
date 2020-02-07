<template>
  <div id="app">
      <h1> This is a Test with components </h1>
          <test-one /> <!-- Test-one component -->
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header {
    background-color: rgb(238, 241, 246);
    box-shadow: 5px 10px 8px #b3b3b3d3;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    box-shadow: 5px 10px 8px #b3b3b3d3;
  }

</style>
