$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $("#view_btn").click(function(event){
    event.preventDefault();

    $("html, body").animate({ scrollTop: $("#works").offset().top }, 800);
  });

  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 670) {
          $(this).addClass("slide");
        }
    });
  });

  $(window).scroll(function() {
	    
	    var winTop = $(window).scrollTop();

	    if (winTop === 0) {
        	$(".navbar-default").css({
          		'background-color': 'rgba(255,255,255,0)',
          		'border': 'none'
          	});
	        $(".navbar-fixed-top").css({
	            'top': '40px',
	            'transition': 'all .5s'
	        });
	        $(".navbar-brand img").css({
			  	'width': '48px',
			  	'height': '48px'
			});
			$(".navbar-brand").css({
			  	'padding': '1px 15px'
			});
			$(".navbar-nav li a").css({
				'font-size': '14px'
			});

        } else if (winTop > 680 ) {
	        $(".navbar-default").css({
	        	'background-color': 'rgba(27,27,27,1)',
	        //	'border-bottom': '1px solid #111',
	        	'transition': 'all .5s'
	        });
	        $(".navbar-fixed-top").css({
	            'top': '0',
	            'transition': 'all .5s'
	        });
	        $(".navbar-brand img").css({
			  	'width': '34px',
			  	'height': '34px'
			});
			$(".navbar-brand").css({
			  	'padding': '8px 15px'
			});
			$(".navbar-nav li a").css({
				'font-size': '13px'
			});
	 
        } else {
        	$(".navbar-default").css({
          		'background-color': 'rgba(255,255,255,0)',
          		'border': 'none'
          	});
        	$(".navbar-fixed-top").css({
	            'top': '10px'
	        });
	        $(".navbar-brand img").css({
			  	'width': '34px',
			  	'height': '34px'
			});
			$(".navbar-brand").css({
			  	'padding': '8px 15px'
			});
			$(".navbar-nav li a").css({
				'font-size': '13px'
			});
        }
	    
	});

  	// Slider
	$('.bxslider').bxSlider({
		minSlides: 2,
		maxSlides: 4,
		slideWidth: 236,
		slideMargin: 0
	});

})
