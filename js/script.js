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
            
        },
        
});
