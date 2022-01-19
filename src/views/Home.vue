<template lang="pug">
#home
  b-container
    b-row
      b-col(cols="6")
        b-table
        .listInput
          b-form-group
            b-form-input#newinput(v-model="newinput" placeholder="Add A New Mission" @keydown.enter="additem")
          b-btn
            img(src="../../public/img/plus.png", alt="alt" @click="additem")
      b-col(cols="6")
</template>

<style lang="scss">
.listInput{
  display: flex;
  height: 60px;
  width: 100%;
  .form-group{
    width: 85%;
    div{
      width: 100%;
      input{
        width: 100%;
        height: 60px;
        border: 2px solid #D9674E;
        border-radius: 5px 0 0 5px;
      }
    }
  }
  button{
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFF;
    border: 2px solid #D9674E;
    border-radius: 0 5px 5px 0;
    margin-left: -2px;
    img{
      height: 30px;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      newinput: ''
    }
  },
  methods: {
    additem () {
      if (this.newinput.length > 2) {
        this.$store.commit('additem', this.newinput)
        this.newinput = ''
      }
    }
  }
}
</script>
