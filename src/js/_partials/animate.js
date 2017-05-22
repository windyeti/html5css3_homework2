$(function() {

	var animate = (function() {

		function checkPosition(elem) {
			// topEdge расстояние от верхней границы 
			// объекта до верхнего края окна
			topEdge = elem.offset().top - $(window).scrollTop();
			bottomEdge = topEdge + elem.outerHeight(true);
			return topEdge < $(window).outerHeight(true)/3 && bottomEdge > $(window).outerHeight(true)/3
		}
		var animateStyle = {
			toLeft : function() {
				$(this).addClass('toLeft');
				console.log('ok1');
			},
			toTop : function() {
				$(this).addClass('toTop');
				console.log('ok2');
			}
		}

		return {
			init : function() {
				var $elems = $('.animate');
				// var notAnimate = [];
				$(window).scroll(function() {
					$elems.each(function(inx, elem) {
					var $this = $(this);
						if( checkPosition($this) && (typeof this.flag == 'undefined') ) {
							var animateType = $this.data('animate');
							animateStyle[animateType].call($this);
							this.flag = true;

						}
					});
				});
			}
		}
// -------------------------- flag через массив -----------------------------
		// return {
		// 	init : function() {
		// 		var $elems = $('.animate');
		// 		var notAnimate = [];
		// 		$(window).scroll(function() {
		// 			$elems.each(function(inx, elem) {
		// 			var $this = $(this);
		// 				if( checkPosition($this) && (typeof notAnimate[inx] == 'undefined') ) {
		// 					var animateType = $this.data('animate');
		// 					animateStyle[animateType].call($this);
		// 					notAnimate[inx] = true;

		// 				}
		// 			});
		// 		});
		// 	}
		// }
	})();

	$('.animate').length && animate.init();
});