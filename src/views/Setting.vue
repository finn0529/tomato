<template lang="pug">
#setting
  b-container
    b-row
      b-col(cols="6")
        .d-flex
          img(src="../assets/img/tomato.png")
          h2.ml-3 Work Ringrone
        hr
        .alert
          b-form-group(v-for="item in items")
            b-form-radio(name="work" :value="item" @change="selectWork") {{ item.name }}
      b-col(cols="6")
        .d-flex
          img(src="../assets/img/tomato.png")
          h2.ml-3 Break Ringrone
        hr
        .alert
          b-form-group(v-for="item in items")
            b-form-radio(name="break" :value="item" @change="selectBreak") {{ item.name }}
  img.group39(src="../assets/img/Group 39.png")
</template>

<style lang="scss">
#setting{
  width: 90%;
}
h2{
  color: #D9674E;
  margin-bottom: 0;
}
hr{
  border: 2px solid #D9674E;
}
.alert{
  width: 100%;
  color: #707070;
  font-size:30px;
}
.form-group{
  float: left;
  width: 33%;
  display: flex;
  .custom-control-label{
    cursor: pointer;
    &::before{
      width: 20px;
      height: 20px;
      border: 3px solid #707070;
      background: none;
      margin-top: 7px;
    }
    &::after{
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #D9564A;
      top: 0.55rem;
      left: -1.2rem;
      background-image:none !important;
      opacity: 0;
      margin-top: 7px;
    }
  }
  .custom-control-input:checked ~ {
    .custom-control-label{
      color: #D9674E;
      &::before{
        width: 20px;
      height: 20px;
      border: 3px solid #D9564A;
      background: none;
      }
      &::after{
        opacity: 1;
      }
    }
  }
}
.group39{
  width: 500px;
  position: absolute;
  bottom: -200px;
  right: 50px;
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
  },
  methods: {
    selectWork (item) {
      console.log(item.src)
      this.$store.commit('selectWorkSound', item.src)
    },
    selectBreak (item) {
      console.log(item)
      this.$store.commit('selectBreakSound', item.src)
    }
  },
  computed: {
    workSound () {
      return this.$store.state.breakSound
    },
    breakSound () {
      return this.$store.state.breakSound
    }
  }
}
</script>
