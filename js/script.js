Vue.config.devtools = true;








const app = new Vue(

    {
        el:'#root',
        data:{
            carouselSlides:[
                {
                    imgList:'img/01.jpg',
                    name:'Svezia',
                    description:'Ma quanto è bella la Svezia'
            
                },
                {
                    imgList:'img/02.jpg',
                    name:'Svizzera',
                    description:'La Svizzera e le meraviglie dei suoi paesaggi montani'
            
                },
                {
                    imgList:'img/03.jpg',
                    name:'Gran Bretagna',
                    description:'I suggestivi paesaggi della Gran Bretagna'
            
                },
                {
                    imgList:'img/04.jpg',
                    name:'Germania',
                    description:'Il fascino delle foreste tedesche e dei suoi castelli'
            
                },
                {
                    imgList:'img/05.jpg',
                    name:'Paradise',
                    description:'Le magnifiche spiagge di Paradise'
            
                }
                
           
            ]

         },
        // end data
        methods:{},
        created:{},
    }

);
