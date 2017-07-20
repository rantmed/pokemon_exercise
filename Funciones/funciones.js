window.onload = function () {

var submit = $('#searchId')
submit.on('click', function(){

  $.get('http://pokeapi.co/api/v2/pokemon/'+ $('#inputId').val() +'/', function( data ) {

  asd = data;
  var i = 0;

  jQuery('<div/>', {
      class: 'tarjeta1',
  }).appendTo('.ajaxContainer');

  jQuery('<h2/>', {
      class: 'nombre1',
      text: data.name
  }).appendTo('.tarjeta1');

  var cadena = ""
  data.types.forEach( function (element){

    cadena = cadena + element.type.name;

    if(i!==1){
      cadena = cadena + "/";
    }

    i++;
  });

      jQuery('<h3/>', {
        class: "tipo",
        text: cadena
    }).appendTo('.tarjeta1');

});

$.get('http://pokeapi.co/api/v2/characteristic/'+ $('#inputId').val() +'/', function( data ) {

  qwe = data;


  jQuery('<p/>', {
      class: 'description1',
      text: data.descriptions[1].description
  }).appendTo('.tarjeta1');

});


});



};