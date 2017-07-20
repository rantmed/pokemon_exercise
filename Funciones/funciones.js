window.onload = function () {

var submit = $('#searchId')
submit.on('click', function(){

  var id = $('#inputId').val();
  $.get('http://pokeapi.co/api/v2/pokemon/'+ $('#inputId').val() +'/', function( data ) {

  asd = data;
  var i = 0;

  jQuery('<div/>', {
      class: 'tarjeta' + id,
  }).appendTo('.ajaxContainer');

  jQuery('<h2/>', {
      class: 'nombre' +id,
      text: data.name
  }).appendTo('.tarjeta' +id);

  var cadena = ""
  data.types.forEach( function (element){

    cadena = cadena + element.type.name;

    if(i!==1 && data.types.length > 1){
      cadena = cadena + "/";
    }


    i++;
  });

      jQuery('<h3/>', {
        class: "tipo",
        text: cadena
    }).appendTo('.tarjeta' + id);

var test = ""

$.get('http://pokeapi.co/api/v1/pokemon/'+ id +'/', function( data ) {

  test = data.descriptions[0].resource_uri

  $.get('http://pokeapi.co/'+ test, function( data ) {

      jQuery('<p/>', {
      class: 'description' + id,
      text: data.description
  }).appendTo('.tarjeta' + id);

  });

});



});

});



};