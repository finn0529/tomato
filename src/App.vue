<template lang="pug">
#app
  b-nav(tabs vertical )
    b-nav-item.mt-3
      img(src="../public/img/tomato.png" width="40px")
    b-nav-item.mt-3
      img(src="../public/img/misic.png" width="40px")
    b-nav-item.mt-3
      img(src="../public/img/chart.png" width="40px")
</template>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
#app{
  height: 100%;
  width: 100%;
  background: #FFE5B5;
  position: relative;
}
.nav{
  position: absolute;
  top: 20px;
  right: 0;
}
</style>
