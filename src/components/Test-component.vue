<template>
    <div class="test">
        <h3 style="width:100%">ходы: {{steps}}</h3>
        <transition-group class="test-list" tag="ul" name="list" >
            <button v-for="(question, i) in material" :key="i" 
            class="test-list--item hidden"
            :id="question.id"
            @click="chooseBox($event)">
                <span v-if="question.text" class="text" >{{question.text}}</span>
                <span v-if="!question.text" >{{question.num}}</span>
            </button>
        </transition-group>
        
        <button @click="shuffle(), button($event.target)" class="button test-shuffle">перемешать</button>
    </div>
</template>



<script>
import { move} from '../greensock';
export default {
  props: ['material'],
  data(){
      return{
          name: 'Test',
          opened: [],
          steps: 0,
          rightNumbers: [],
      }
  },
  watch: {
      steps(){
          this.opened = [];
      },
      material(){ 
        this.rightNumbers = [];
        let boxes = document.querySelectorAll('.test-list--item');
        boxes.forEach(el => {
            el.classList.remove('right')
            el.classList.remove('active')
            el.classList.remove('flipp')
            el.classList.add('hidden')
            el.disabled = false;
        })
        this.steps = 0;
      }
  },
  methods: {
      chooseBox($event){
          if($event.currentTarget == this.opened[0]){
              return
          }
          else {
          if(this.opened.length >= 2){
             return
          }else{
            this.opened.push($event.currentTarget)
            this.opened.forEach(el => {
                el.classList.remove('hidden')
                el.classList.add('flipp');
                el.classList.add('active');
            })
            this.prove(this.opened);
          }
          
          }
          
      },
      prove(arr){
          if(arr.length == 2){
            if(arr[0].id == arr[1].id){
                this.rightNumbers.push(arr[0]);
                this.rightNumbers.push(arr[1]);
                this.material.length == this.rightNumbers.length ? setTimeout(() => {
                        this.$emit('finish') 
                }, 1000): ''
                    
                    this.steps++;
                    arr.forEach(el => {
                        el.classList.add('right');
                        el.classList.remove('active'); 
                        el.disabled = true;     
                     });
            }
            else{
                setTimeout(() => {
                    arr.forEach(el => {
                        el.classList.add('hidden');
                        el.classList.remove('flipp');
                        el.classList.remove('active');
                     });
                    this.steps++
                }, 700)  
             }
          }  
          else if(arr.length > 2){
              arr.forEach(el => el.classList.add('hidden'));
          }
      },
      shuffle(){
          this.rightNumbers = [];
          this.steps = 0;
          let boxes = document.querySelectorAll('.test-list--item');
          move(boxes)
          boxes.forEach(el => {
                el.classList.remove('right')
                el.classList.remove('active')
                el.classList.remove('flipp')
                el.classList.add('hidden')
                el.disabled = false;     
          })
          this.$emit('minmax')
          
      },
      button(target){
          this.$root.button(target)
      }
  },
}
</script>

<style scoped lang="scss">
@import '../style/general.scss';
    
    .test {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        &-list{
            width: 100%;
            padding: 10%;
            box-sizing: border-box;           
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-left: auto;
            margin-right: auto;
            &--item {
                width: 16%;
                height: 10vw;
                width: 10vw;
                border: 2px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 3%;
                margin-bottom: 3%;
                border-radius: 10px;
            }
        }
        &-shuffle {
            @include button();
            background: $green-blue;
        }
        .hidden {
            background: linear-gradient(0deg, yellow, red, black);
            background: rgba(240, 144, 60, 1)
        }
        .hidden span{
            opacity: 0;
        }
        .flipp {
            transform: rotate3d(0, 1, 0, 180deg) !important;        
            transition: all 0.2s;    
        }
        .flipp span {
            transform: rotate3d(0, 1, 0, -180deg);
        }
        .right {
            background-color: $blue;
        }
        .active {
            background-color:rgba(0,0,0,0.2);
            span {
                font-weight: bold;
            }
            .text {
                background: yellow;
                
                padding-right: 5%;
                padding-left: 5%;
            } 
        }
    }


  @media(min-width:$laptop){
      .test{
          &-list{
              &--item{
                  width:7vw;
                  height:7vw;
              }
          }
          &-shuffle{
              font-size: 1.5rem;
          }
      }
  }

   @media (min-width: $desktop){
       .test {
        &-list{
            &--item {
                height: 4vw;
                width: 4vw;
            }
        }
        &-shuffle {
            font-size: 15px;          
            min-width: 30px;
            width: fit-content;
            padding: 1%;
            padding-top: 1%;
            padding-bottom: 1%;
            margin-left: auto;
        }
    }
   }
</style>
