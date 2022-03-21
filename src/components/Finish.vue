<template>
<div class="modalWrapp" @click.self="$emit('close')">
  <div class="modalFinish">
      <h3>Молодец! Ты собрал все числа!</h3>
      <button @click="$emit('close'), buttonEffect($event.target)" class="close">close</button>
      <img src="" >
  </div>
</div>
</template>

<script>
export default {
    methods: {
      buttonEffect(target){
        this.$root.button(target)
      }
    }
}
</script>

<style scoped lang="scss">
@import '../style/general.scss';
  .modalWrapp {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.3)
  }
  .modalFinish {
        position: absolute;
        z-index: 3;
        width: 40%;
        top: 20vh;
        left: 50%;
        background-color: $blue;
        padding: 7%;
        padding-right: 3%;
        padding-left: 3%;
        border-radius: 15px;
        transform: translateX(-50%);
        .close {
          @include button();
        }
  }
</style>