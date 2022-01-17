<template lang="pug">
#setting
  b-container
    b-row
      b-col(cols="6")
        .d-flex
          img(src="../../public/img/tomato.png")
          h2.ml-3 Work Ringrone
        hr
        .alert.d-flex
          .name.ml-3(v-for="item in items") {{ item.name }}
      b-col(cols="6")
        .d-flex
          img(src="../../public/img/tomato.png")
          h2.ml-3 Break Ringrone
        hr
</template>

<style lang="scss">
h2{
  color: #D9674E;
  margin-bottom: 0;
}
hr{
  border: 2px solid #D9674E;
}
.name{
  color: #707070;
  font-size:30px;
}
</style>

<script>
export default {
  data () {
    return {
      items: [
        { name: '鬧鈴', src: 'alarm.mp3' },
        { name: 'ya', src: 'yay.mp3' }
      ]
    }
  }
}
</script>
