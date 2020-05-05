$(document).ready(function() {
 
    $(".img").click(function() {
        $(this).toggleClass("img-hover");
        $( ".name" ).fadeIn( "slow" );
    });
    
    $(".check").click(function() {
        $(".img").toggleClass("img-hover");
        $( ".name" ).fadeIn( "slow" );
    });
    
    var gen1 = [
    'butterfree.gif'
  , 'charizard.gif'
  , 'clefairy.gif'
  , 'gastly.gif'
  , 'jigglypuff.gif'
  , 'magikarp.gif'
  , 'mew.gif'
  , 'pikachu.gif'
  , 'poliwrath.gif'
  , 'ponyta.gif'
  , 'rattata.gif'
  , 'tentacool.gif'
];
    
    var gen2 = [
    'celebi.gif'
  , 'ho-oh.gif'
  , 'mareep.gif'
  , 'marill.gif'
  , 'miltank.gif'
  , 'pichu.gif'
  , 'porygon2.gif'
  , 'swinub.gif'
  , 'togepi.gif'
  , 'typhlosion.gif'
  , 'tyranitar.gif'
  , 'unown.gif'
];
    
    var gen3 = [
    'mawile.gif'
  , 'metagross.gif'
  , 'milotic.gif'
  , 'mudkip.gif'
  , 'nosepass.gif'
  , 'ralts.gif'
  , 'rayquaza.gif'
  , 'sableye.gif'
  , 'sharpedo.gif'
  , 'spinda.gif'
  , 'torchic.gif'
  , 'wailord.gif'
];
       
    
    var gen4 = [
    'abomasnow.gif'
  , 'ambipom.gif'
  , 'arceus.gif'
  , 'bidoof.gif'
  , 'buneary.gif'
  , 'croagunk.gif'
  , 'darkrai.gif'
  , 'garchomp.gif'
  , 'glaceon.gif'
  , 'hippowdon.gif'
  , 'lucario.gif'
  , 'pachirisu.gif'
];
    
    var gen5 = [
    'amoonguss.gif'
  , 'cofagrigus.gif'
  , 'darmanitan.gif'
  , 'leavanny.gif'
  , 'musharna.gif'
  , 'scolipede.gif'
  , 'snivy.gif'
  , 'victini.gif'
  , 'volcarona.gif'
  , 'zebstrika.gif'
  , 'zekrom.gif'
  , 'zoroark.gif'
];
    
    var gen6 = [
    'chespin.gif'
  , 'clawitzer.gif'
  , 'dedenne.gif'
  , 'diancie.gif'
  , 'greninja.gif'
  , 'klefki.gif'
  , 'malamar.gif'
  , 'pancham.gif'
  , 'sylveon.gif'
  , 'trevenant.gif'
  , 'vivillon.gif'
  , 'yveltal.gif'
];
    
    $( ".gen1-3" ).click(function() {
      var gen = Math.floor((Math.random() * 3) + 1); 
  $( ".gen" + gen ).trigger( "click" );
});
    
    $( ".gen4-6" ).click(function() {
      var gen = Math.floor((Math.random() * 3) + 4); 
  $( ".gen" + gen ).trigger( "click" );
});
 
    
    $(".gen1").click(function() {
        var randomNumber = Math.floor( Math.random() * gen1.length );
        $('.img').attr('src', "img/Pokemon/Gen1/" + gen1[randomNumber]);
        $('.img-hover').removeClass("img-hover");
        var myString = gen1[randomNumber];
        var avoid = ".gif";
        var name = myString.replace(avoid, '');
         $( ".name" ).text( name );
        $( ".name" ).hide( 0 );
    });
    
    $(".gen2").click(function() {
        var randomNumber = Math.floor( Math.random() * gen2.length );
        $('.img').attr('src', "img/Pokemon/Gen2/" + gen2[randomNumber]);
        $('.img-hover').removeClass("img-hover");
        var myString = gen2[randomNumber];
        var avoid = ".gif";
        var name = myString.replace(avoid, '');
         $( ".name" ).text( name );
        $( ".name" ).hide( 0 );
    });
    
    $(".gen3").click(function() {
        var randomNumber = Math.floor( Math.random() * gen3.length );
        $('.img').attr('src', "img/Pokemon/Gen3/" + gen3[randomNumber]);
        $('.img-hover').removeClass("img-hover");
        var myString = gen3[randomNumber];
        var avoid = ".gif";
        var name = myString.replace(avoid, '');
         $( ".name" ).text( name );
        $( ".name" ).hide( 0 );
    });
   
     $(".gen4").click(function() {
        var randomNumber = Math.floor( Math.random() * gen4.length );
        $('.img').attr('src', "img/Pokemon/Gen4/" + gen4[randomNumber]);
        $('.img-hover').removeClass("img-hover");
        var myString = gen4[randomNumber];
        var avoid = ".gif";
        var name = myString.replace(avoid, '');
         $( ".name" ).text( name );
         $( ".name" ).hide( 0 );
    });
    
    $(".gen5").click(function() {
        var randomNumber = Math.floor( Math.random() * gen5.length );
        $('.img').attr('src', "img/Pokemon/Gen5/" + gen5[randomNumber]);
        $('.img-hover').removeClass("img-hover");
        var myString = gen5[randomNumber];
        var avoid = ".gif";
        var name = myString.replace(avoid, '');
         $( ".name" ).text( name );
        $( ".name" ).hide( 0 );
    });
    
     $(".gen6").click(function() {
        var randomNumber = Math.floor( Math.random() * gen6.length );
        $('.img').attr('src', "img/Pokemon/Gen6/" + gen6[randomNumber]);
        $('.img-hover').removeClass("img-hover");
        var myString = gen6[randomNumber];
        var avoid = ".gif";
        var name = myString.replace(avoid, '');
         $( ".name" ).text( name );
         $( ".name" ).hide( 0 );
   
    });
    
    
})