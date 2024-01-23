<template>
  <div id="app">
    <nav class="skip">
      <router-link to="/timeClock" class="router">仿真时钟</router-link> |
      <router-link to="/sihuo" class="router">逆天私活（粗糙见谅）</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
.skip{
  width: 100%;
  height: 30px;
  text-align: center;
  color: rgb(40, 174, 99);
  padding-top: 55px;
  font-size: 20px;
  line-height: 20px;

}

.router {
  color: rgb(86, 236, 151);
  font-size: 20px;
  line-height: 20px;
}

#app{
    width: 100%;
    height: 780px;
    background-color:rgb(61, 62, 62);
}



</style>
