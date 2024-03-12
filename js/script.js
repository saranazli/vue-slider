
const { createApp } = Vue;

createApp({

  data(){

    return{

      imgs : [

        './img/01.webp',
        './img/02.webp',
        './img/03.webp',
        './img/04.webp',
        './img/05.webp'

      ],

      counter : 0

    }
  },

  methods:{

    next(){
      this.counter++
      if(this.counter === this.imgs.length){
        this.counter=0
      }
    },

    prev(){
      this.counter--
    },

    continuo(){
     
    }

  },

  mounted(){



  }

}).mount('#app');
