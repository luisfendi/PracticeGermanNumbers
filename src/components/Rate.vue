<template>
    <div class="rate">
        <div class="out">
            <span class="out-Min">{{max > min ? min : max}}</span>
            <span class="out-Max">{{max > min ? max : min}}</span>
        </div>
        <div class="range">
            <input type="range" class="range-min" id="rangeMin" v-model.number="min">
            <input type="range"  class="range-max" v-model.number="max" id="rangeMax">
            <div class="track">
                <span class="track-slider"> </span>
            </div>       
        </div>
    </div>
</template>

<script>
import rate from '../range-slider'
export default{
    data(){
        return{
            min: 5,
            max: 66,
        }
    },
    methods: {
       
    },
    mounted(){
        rate();
    },
    created(){
        this.$emit('minmax', {min:this.min, max:this.max});
    },
    watch:{
        min(){
            if(+this.min > +this.max){  
               this.$emit('minmax', {min:this.max, max:this.min});
            }else {
            this.$emit('minmax', {min:this.min, max:this.max});
            }
            rate()
        },
         max(){
             if(+this.max < +this.min){
                this.$emit('minmax', {min:this.max, max:this.min});
             }
             else {
                this.$emit('minmax', {min:this.min, max:this.max})
             }
             rate()
        },
    }
}
</script>

<style scoped lang="scss">
    @import '../style/general.scss';
    
.rate {
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    align-items: center;
    justify-content: center;
    .range {
            position: relative;
            width: 50%;
            min-height: 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            &-min, &-max {
                width: 100%;
                height: 100%;
                background:none;
                z-index:2;
                position: absolute;
                left: 0;
                bottom: 0;
                pointer-events: none;
               -webkit-appearance: none;
                
                &::-webkit-slider-thumb{
                    pointer-events: all;
                    -webkit-appearance: none;
                    width: 4vw;
                    height: 4vw;
                    border-radius: 50%;
                    border: 1px solid black;
                    opacity: 1;
                    background: $green-blue;
                   
                }
            } 
            .track {
                    width: 100%;
                    min-height: 5px;
                    background: grey;
                    position: relative;
                    top: 25%;
                    left: 0;
                    opacity: 1;
                    box-sizing: border-box;
                    border: 1px solid black;
                    border-radius: 3px;
                    margin: (0, 15px);
                    &-slider {
                        height: 100%;
                        background: $orange;
                        position: absolute;
                        left: 25%;
                        right: 10%;
                    }
            }  
    }
    .out {
        display: flex;
        width: 50%;
        justify-content: space-around;
        padding-bottom: 2%;
        &-Min, &-Max {
            background:white;
            border-radius: 15px;
            width: 40%;
            padding-top: 2%;
            padding-bottom: 2%;
            border: 2px solid grey;
        }
    }
}


@media(min-width: $laptop){
    .rate {
    
    .range {
            width: 40%;
            &-min, &-max {
                
                
                &::-webkit-slider-thumb{
                   width: 4vw;
                   height: 4vw; 
                }
            } 
            .track {
                    
                    &-slider {
                       
                    }
            }  
    }
    .out {
        
        width: 30%;
        
        &-Min, &-Max {
            
            width: 25%;
            
        }
    }
}
}


@media(min-width: $laptop){
    .rate {
            margin-top: 5%;
    .range {
            width: 30%;
            &-min, &-max {
                
                
                &::-webkit-slider-thumb{
                   width: 1.3vw;
                   height: 1.3vw;
                   
                }
            } 
            .track {
                    
                    &-slider {
                       
                    }
            }  
    }
    .out {
        
        width: 30%;
        
        &-Min, &-Max {
            
            width: 15%;
            
        }
    }
}
}
</style>