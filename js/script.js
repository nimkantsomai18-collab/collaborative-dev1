
		$(function(){
		$('#myCarousel').carousel({
			interval: 4000
		});
		document.getElementById("cc").style.display="none";
		$(document).ready(function(){
			$('#cc').slideDown(2000);
		});	
	});
	

    $(window).ready(function(){
    	function modals(){
    		$('#myModal').modal('show');
    	}
        setTimeout(modals, 3000)
    });



	$(function(){

		var quoteButton=$('.m'),
			blockquote =$('blockquote');

			quoteButton.on('click',function(e){
				e.preventDefault();
				var quoteButtonText=quoteButton.text();

				blockquote.slideToggle(200,function(){
				
				});
			});
			})();

	$(function(){

		var quoteButton=$('.bt'),
			blockquote =$('blockquote');

			quoteButton.on('click',function(e){
				e.preventDefault();
				var quoteButtonText=quoteButton.text();

				blockquote.slideToggle(200,function(){
				
				});
			});
			})();

			document.getElementById("spn").style.display="none";
		$(document).ready(function(){
			$('#spn').slideDown(1000);
		});

		document.getElementById("pan1").style.display="none";
		document.getElementById("pan2").style.display="none";
		document.getElementById("go").style.display="none";

		$(function(){
		$('#from').on('click',function(){
				$('#pan1').fadeIn(2000);
			});
		$('#to').on('click',function(){
				$('#pan2').fadeIn(2000);
			});
		$('#sele').on('click',function(){
				$('#go').fadeIn(2000);
			});
		});
	
$(function(){
		$('.carousel').carousel({
			interval: 3000
		})}
	);
