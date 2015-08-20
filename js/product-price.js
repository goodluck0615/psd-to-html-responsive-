
  jQuery(document).ready(function($){
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 230,
      values: [ 75, 230 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $( "#amount1" ).val( "$"  + ui.values[ 0 ] );
        $( "#amount2" ).val( "$"  + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    $( "#amount1" ).val( "$" +  $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount2" ).val( "$" +  $( "#slider-range" ).slider( "values", 1 ) );
  });
 