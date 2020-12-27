var qtd         = $('div#testemunhos ul').length;
var limite      = (qtd * 336) * -1;
var largura     = limite + 336;
var view_larg   = $('section#testemunha div#testemunha-centro').width();
$('div#testemunhos').css('width',limite*-1);


$('div#testemunha-direita').click(function(){
    
    posicaoAtual    = $('div#testemunhos').position().left;
    novaPosicao     = posicaoAtual - view_larg;
    if ( limite < (novaPosicao - view_larg) ) {
        $('div#testemunhos').animate({left: novaPosicao}, 1000);
    }
    if ( (novaPosicao-view_larg) < (limite+view_larg))  {
        $('div#testemunha-direita ion-icon').css('opacity',0.5);
        $('div#testemunha-direita ion-icon').css('cursor','not-allowed');
    }  
    $('div#testemunha-esquerda ion-icon').css('opacity',1);
    $('div#testemunha-esquerda ion-icon').css('cursor','pointer');
})

$('div#testemunha-esquerda').click(function(){
  
    posicaoAtual    = $('div#testemunhos').position().left;
    novaPosicao     = 0;
 
    console.log(posicaoAtual);

    if ( Math.round(posicaoAtual)<0 ) {
        novaPosicao = (posicaoAtual + view_larg).toFixed(2);
        $('div#testemunhos').animate({left: novaPosicao}, 1000);
    }
    if ( Math.round(novaPosicao) == 0 ){
        $('div#testemunha-esquerda ion-icon').css('opacity',0.5);
        $('div#testemunha-esquerda ion-icon').css('cursor','not-allowed');
    }


    $('div#testemunha-direita ion-icon').css('opacity',1);
    $('div#testemunha-direita ion-icon').css('cursor','pointer');


})


$('div.planos-bottom').click(function(){
    alert('Click');
});


$('ion-icon#facebook').click(function(){
    window.open("https://facebook.com/cazelattojr","_blank");
});

$('ion-icon#instagram').click(function(){
    window.open("https://instagram.com/carloscazelattojr","_blank");
});

$('ion-icon#youtube').click(function(){
    window.open("https://youtube.com","_blank");
});


/* Codigo de Animacao */ 

$('section#domingo-perfeito').waypoint(function(direcao){
    
    if (direcao=="down"){
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');

        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
    }else{
        
    }
    
},{
    offset: '400px;'
});

$('section#pizza').waypoint(function(direcao){
    if (direcao=="down"){
        $('section#pizza p').addClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow');

    }else{
        
    }    
},{
    offset: '400px;'
});

$('div#testemunhos ul:eq(0)').css('opacity', 0);
$('div#testemunhos ul:eq(1)').css('opacity', 0);
$('div#testemunhos ul:eq(2)').css('opacity', 0);

$('section#testemunha').waypoint(function(direcao){
    if (direcao=="down"){
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp');
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    }else{

    }


},{
    offset: '400px;'
});

$('div#transicao-testemunha-plano').waypoint(function(direcao){

    if (direcao=="down"){
        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate_slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate_slow');
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate_slowew');
    } else { 

    }

},{
    offset: '400px;'
});

$('section#plano-principal').waypoint(function(direcao){
    if (direcao=="down"){
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate_slow');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeIn animate_slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate_slow');
    }else{

    }
},{
    offset: '200px;'
});

$('footer').waypoint(function(direcao){
    if (direcao=="down"){
        $('div#mapa').addClass('animate__animated animate__fadeIn');
        $('div#info').addClass('animate__animated animate__fadeIn');
        $('div#pizza-rodape-decoracao').addClass('animate__animated animate__fadeIn');
    }
},{
    offset: '400px;'
})

$('header h1').waypoint(function(direcao){
    if (direcao =="down"){
        $('nav').addClass('navEstatica');
        $('nav div').addClass('logoEstativo');
        $('nav ul').addClass('menuEstatico');
        $('nav ul li a').addClass('itemEstatico');
        $('nav ion-icon').addClass('iconeEstatico');
        $('nav ul#icone-menu-mobile ion-icon').css('color','#404040');
        $('nav ul#icone-menu-mobile').css('margin-top','5px');
    } else {
        $('nav').removeClass('navEstatica');
        $('nav div').removeClass('logoEstativo');
        $('nav ul').removeClass('menuEstatico');
        $('nav ul li a').removeClass('itemEstatico');
        $('nav ion-icon').removeClass('iconeEstatico');
        $('nav ul#icone-menu-mobile ion-icon').css('color','white');
        $('nav ul#icone-menu-mobile').css('margin-top','70px');
    }
},{
    offset: '200px;'
});


//ACOES DE NAVEGACAO

$('nav div').click(function(){
    $('html,body').animate({
        scrollTop:$('header').offset().top
    },1000, function(){
        if ( $(window).width() < 612 ){
            esconderMenu();        
            controle = true ;
        }
    });
});


$('nav ul li:eq(0)').click(function(){
    $('html,body').animate({
        scrollTop:$('section#domingo-perfeito').offset().top
    },1000, function(){
        if ( $(window).width() < 612 ){
            esconderMenu();        
            controle = true ;
        }
    });
});

$('nav ul li:eq(1)').click(function(){
    $('html,body').animate({
        scrollTop:$('section#pizza').offset().top
    },1000,function(){
        if ( $(window).width() < 712 ){
            esconderMenu();        
            controle = true ;
        }
    });
});

$('nav ul li:eq(2)').click(function(){
    $('html,body').animate({
        scrollTop:$('section#testemunha').offset().top
    },1000,function(){
        if ( $(window).width() < 612 ){
            esconderMenu();        
            controle = true ;
        }
    });
});

$('nav ul li:eq(3)').click(function(){
    $('html,body').animate({
        scrollTop:$('section#plano-principal').offset().top
    },1000, function(){
        if ( $(window).width() < 712 ){
            esconderMenu();        
            controle = true ;
        }
    });
});



function mostrarMenu(){
    $('nav ul#esquerda').css('display', 'flex');
    $('nav ul#direita').css('display', 'flex');    
}

function esconderMenu(){
    $('nav ul#esquerda').css('display', 'none');
    $('nav ul#direita').css('display', 'none'); 
}

var controle = true;
$('nav ul#icone-menu-mobile').click(function(){
    if ( controle == true){
        mostrarMenu();
        controle = false ;
    }else{
        esconderMenu();
        controle = true ;
    }    
});

$(window).resize( function(){
    if ($(window).width()>812 ){
        mostrarMenu();
    }else{
        esconderMenu();
    }
});