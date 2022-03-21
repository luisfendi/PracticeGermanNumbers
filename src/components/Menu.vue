<template>
    <div class='menu'>
    
        <input type="checkbox" id="menuInput" v-model="menuModel">
        <label for="menuInput" class="menu-label"><span></span></label>
        <ul class='menu-list' v-show="menuModel">
            <li v-for="(item, i) in menu" :key="i"
            v-on:click="$emit('choosetest', item), menuModel = !menuModel, show()"
            class="menu-list--item"
            >
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data(){
      return{
          menuModel: false, 
      }
  },
  methods: {
      show(){
          console.log(this.menuModel)
      }
  },
  props: ['menu'],
  
}
</script>

<style scoped lang='scss'>
    @import '../style/general.scss';


    .menu {
        display: flex;
        position: relative;
        width: 100%;
        min-height:50px;
        &-list{
            background-color: yellow;
            display: none;
            flex-direction: column;
            position: absolute;
            top: 7vw;
            align-items: flex-start;
            width: 50%;
            &--item{
                width: 100%;
                padding-top: 5%;
                padding-bottom: 5%;
                border-bottom: 1px solid black;
                &:last-child{
                    border-bottom: none;
                }
            }
        }
        input{
            display: none;
        }
        &-label{
            position: absolute;
            top: 0; 
            left: 0;
            width: 7vw;
            height: 7vw;
            border: 2px solid black;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            span, span:before, span:after {
                transition: all .5s ease-in-out;
                height: 0.8vw;
                background-color: black;
            }

            span{
                width: 90%;
                position: relative;

                &:before, &:after{
                    content: '';
                    width: 100%;
                    height: 0.8vw;
                    position: absolute;
                    top: -1.5vw;
                    left: 0;
                }

                 &:after{
                    transition: all .2s ease-in-out;
                    top: 1.5vw;   
                }
            }
        }

        input:checked ~ .menu-list {
            display: flex;
        }

        input:checked ~ .menu-label span {
            transform: rotate(45deg);
            transition: all .3s ease-in-out;
            
        }

         input:checked ~ .menu-label span:before {
            transition: all .5s ease-in-out;
            transform: rotate(-90deg);
            top: 0;
        }
        input:checked ~ .menu-label span:after {
            transition: all .3s ease-in-out;
            transform: rotate(90deg);
            top: 0;
            opacity: 0;
        }
    }

</style>
