$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{   // abaixo de 600 px mostra um item
            items:1
        },
        600:{  // 600 ,= x < 1000px mostra 3 itens 
            items:3
        },
        1000:{  // de 1000px para cima mostra 5 itens
            items:5
        }
    }
})