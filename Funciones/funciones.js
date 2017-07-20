window.onload = function () {

  $.get('http://pokeapi.co/api/v2/type/', function( data ) {

    tyu = data;
  
    data.results.forEach(function (element){
      jQuery('<option/>', {
      value: element.url,
      text: element.name
      }).appendTo('#type-selector'); 

    });

  });

var submitType = $('#searchType');

  submitType.on('click', function() {

    $.get( $('#type-selector').val() , function( data ) {

      iop = data; 

      for (var i = 0; i < 10; i++) {
        console.log(data.pokemon[i].pokemon.name);
      }

      });

    });


var submit = $('#searchId')
submit.on('click', function(){

  var id = $('#inputId').val();
  $.get('http://pokeapi.co/api/v2/pokemon/'+ $('#inputId').val() +'/', function( data ) {

  asd = data;
  var i = 0;

  var carta = jQuery('<div/>', {
      class: 'tarjeta' + id,
  })

  var nombre = jQuery('<h2/>', {
      class: 'nombre' +id,
      text: data.name 
  })

  var cadena = ""
  data.types.forEach( function (element){

    cadena = cadena + element.type.name;

    if(i!==1 && data.types.length > 1){
      cadena = cadena + "/";
    }


    i++;
  });

     var tipo = jQuery('<h3/>', {
        class: "tipo",
        text: cadena
    })

    $.get('http://pokeapi.co/api/v1/pokemon/'+ id +'/', function( data ) {

      test = data.descriptions[0].resource_uri

      $.get('http://pokeapi.co/'+ test, function( data ) {

      carta.appendTo('.ajaxContainer');
      nombre.appendTo('.tarjeta' + id);
      tipo.appendTo('.tarjeta' + id);       
          jQuery('<p/>', {
          class: 'description' + id,
          text: data.description
      }).appendTo('.tarjeta' + id);

      });

    });

var test = ""



});

});



};

//function()