/*
* Modal Plugin
*/

	(function( $ ) {
	$.fn.pwcModal = function() {
		// Do your awesome plugin stuff here
	
		// run the currently selected effect
		function runEffect(text, img) {
			var overlay = '<div id="overlay"></div>';
			var modal = $('<div id="modal-box" class="ui-widget-content ui-corner-all"><h3 class="ui-widget-header ui-corner-all right">x</h3> <p id="modal-text">' + text + '</p> </div>');
			
			// get effect type from 
			var selectedEffect = "blind";

			// most effect types need no options passed by default
			var options = {};
			
			$('#content-wrap').append(overlay, modal);
			$(img).css('display','block')
			$('#overlay').append(img);
			
			$( "h3.ui-widget-header", modal ).click(function(){
				$(this).parent().remove();
				$('#overlay').remove();
			})
			// some effects have required parameters
			if ( selectedEffect === "scale" ) {
				options = { percent: 100 };
			} else if ( selectedEffect === "size" ) {
				options = { to: { width: 280, height: 185 } };
			}

			// run the effect
			$(modal).show( selectedEffect, options, 500 );
		};
		
		// set effect from select menu value
			$(this).click(function() {
				var text = $(this).children('.text').html();
				var img = $(this).children('.text-image').clone();
				runEffect(text, img);
				return false;
			});
  };
})( jQuery );

/*
* Hovering Plugin
*/
(function( $ ) {
	$.fn.pwcClick = function(width, height, infoDiv) {
		$(this).mouseenter(function(){
			var coords = $(this).attr('coords').split(',');
			var z = coords[2];
			if (coords[3] ){
				var x = coords[0];
				var y = coords[1];
			}else{
				var x = coords[0] - z;
				var y = coords[1] - z;
			}
			var div = $(infoDiv);
			var imgDiv = $('#interactive');
			div.attr('class','popup')
			div.appendTo(imgDiv).css({
				display: 'block',
				position: 'absolute',
				height: height,
				width:	width,
				left	: x,
				top: y
			});
			$(".popup").pwcModal()
			$(".popup").mouseleave(function(){
					$('.popup').remove();
				}) 
		})//end this.click or this.hover
	  };//endfn.pwcClick
		
})( jQuery );