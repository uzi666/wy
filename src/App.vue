<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-overflow-scrolling: touch;
  width: 750px;
  margin: 0 auto;
}
html,
body,
#app {
  min-height: 100%;
  background:#f5f5f5;
}
a{
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li{
  list-style:none;
}
</style>
