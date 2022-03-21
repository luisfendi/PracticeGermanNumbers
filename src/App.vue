<template>
  <div id="app">
    <button class="scrollButton buttonByScroll" @click="scrollTo()"></button>
    <p class="test-description">Задай желаемый диапозой чисел и найди пару:
      <br>
      <span class="paar">"число - его написание"</span>
    </p>
    <Rate @minmax="textForNumbers" />
    <Test @minmax="textForNumbers" @finish="endTest" :material="material"/>
    <Finish v-if="finish" @close='close'/>
  </div>
</template>

<script>
//import Menu from './components/Menu.vue'
import Test from './components/Test-component.vue'
import Rate from './components/Rate.vue'
import Finish from './components/Finish.vue'
import { build } from './buildNumbers';
import  {scrollListen, upToScroll}  from './scroll';


export default {
  data(){
    return {
      currentTest: '' || 'Zahlen',
      menu: ['Zahlen', 'Tiere'],
      numbersText: build(),
      material: '',
      rate: '',
      finish: false,
    }
  },
  mounted(){
     scrollListen()
  },
  methods: {
    chooseTest(comp){
      this.currentTest = comp;
    },
    textForNumbers(obj = this.rate){
      if(obj){this.rate = obj}
      let res = []
      this.numbersText
      .map((el, i) => {
        let itemN = {num: i, id: i};
        let itemT = {text: el, id: i};
        res.push(itemN);
        res.push(itemT)
      })
      this.material = res.filter(el => el.id >= obj.min && el.id <= obj.max).sort(() => Math.random() - 0.5)
    },
    endTest(){
      this.finish = true;
    },
    close(){
      setTimeout(() => {this.finish = false;}, 200)
    },
    scrollTo(){
      upToScroll()
    },
  },
  components: {
    Test: Test,
    Rate: Rate,
    Finish: Finish
  }
}
</script>

<style  lang="scss">
@import './style/general.scss';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  
}

.buttonByScroll {
  @include scrollButton()
}

.test-description {
    line-height: 1.5rem;
}

@media(min-width: $laptop){
  .buttonByScroll {
    width: 5vw;
    height: 5vw;
  }
}
@media(min-width: $desktop){
  .buttonByScroll {
    width: 3vw;
    height: 3vw;
  }
}



</style>


