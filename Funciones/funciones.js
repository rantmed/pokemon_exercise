window.onload = function () {

$.get('http://pokeapi.co/api/v2/pokemon/1/', function( data ) {

  asd = data;
  var i = 0;

  jQuery('<div/>', {
      class: 'tarjeta1',
  }).appendTo('.ajaxContainer');

  jQuery('<h2/>', {
      class: 'nombre1',
      text: data.name
  }).appendTo('.tarjeta1');

  data.types.forEach( function (element){

    jQuery('<h3/>', {
        class: "tipo" + i,
        text: element.type.name
    }).appendTo('.tarjeta1');

    i++;
  });

});

$.get('http://pokeapi.co/api/v2/characteristic/1/', function( data ) {

  qwe = data;


  jQuery('<p/>', {
      class: 'description1',
      text: data.descriptions[1].description
  }).appendTo('.tarjeta1');

});


};