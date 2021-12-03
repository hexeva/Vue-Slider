Vue.config.devtools = true;


const app = new Vue({
        el:'#root',
        data:{
            carouselSlides:[
                {
                    image:'img/01.jpg',
                    name:'Svezia',
                    description:'Ma quanto è bella la Svezia'
            
                },
                {
                    image:'img/02.jpg',
                    name:'Svizzera',
                    description:'La Svizzera e le meraviglie dei suoi paesaggi montani'
            
                },
                {
                    image:'img/03.jpg',
                    name:'Gran Bretagna',
                    description:'I suggestivi paesaggi della Gran Bretagna'
            
                },
                {
                    image:'img/04.jpg',
                    name:'Germania',
                    description:'Il fascino delle foreste tedesche e dei suoi castelli'
            
                },
                {
                    image:'img/05.jpg',
                    name:'Paradise',
                    description:'Le magnifiche spiagge di Paradise'
            
                }   
            ],
            activeImg:0,
            
         },
        // end data
        methods:{

            activeDown:function(){
                if(this.activeImg < this.carouselSlides.length - 1){
                    this.activeImg++;
                }else {
                    this.activeImg = 0;
                }
                
            },
            activeUp:function(){
                if(this.activeImg > 0){
                    this.activeImg--;
                }else{
                    this.activeImg = this.carouselSlides.length - 1;
                }
            },

            selectThumb:function(){
              if( this.carouselSlides.index != this.activeImg){
                  this.carouselSlides.index = 0;

              }
            }
            
        },
        // end methods
        
});


// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
