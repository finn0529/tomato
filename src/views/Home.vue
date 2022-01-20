<template lang="pug">
#home
  b-container
    b-row
      b-col(cols="6")
        .outlist
          b-table#list(:items="items" :fields="fields" show-empty )
            template(#empty)
              p.text-center 沒有項目
            template(#cell(action)="data")
              b-btn
                img(src="../../public/img/play.png")
        .listInput
          b-form-group
            b-form-input#newinput(v-model="newinput" placeholder="Add A New Mission" @keydown.enter="additem")
          b-btn(@click="additem")
            img(src="../../public/img/plus.png", alt="alt")
      b-col(cols="6")
</template>

<style lang="scss">
@mixin center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.outlist{
  height: 300px;
  overflow: auto;
  #list{
    thead{
      display: none;
    }
    tr{
      width: 100%;
      td:nth-child(1){
      width: 70%;
      }
      td:nth-child(2){
      width: 20%;
      height: 100%;
      }
      td{
        position: relative;
        word-break: break-all;
        font-size: 30px;
        border: none;
        padding: auto;
        button{
          position: absolute;
          top: 35%;
          left: 35%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          @include center;
          img{
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
}

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
      newinput: '',
      fields: [
        { key: 'name' },
        { key: 'action' }
      ]
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    additem () {
      this.$store.commit('additem', this.newinput)
      this.newinput = ''
    }
  }
}
</script>
