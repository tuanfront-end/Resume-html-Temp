;(function($) {
	"use strict";
	var HAINTHEME = HAINTHEME || {};

	//== Check if element exist
	//
	$.fn.exists = function(callback) {
		var args = [].slice.call(arguments, 1);
		if (this.length) {
			callback.call(this, args);
		}
		return this;
	};

	//===== Header area
	//
	HAINTHEME.navbar = function() {
		
	};

	$(document).ready( function() {
		HAINTHEME.navbar();
		
	});


	new WOW().init();

	$(document).ready( function() {
		//$('#onload').css('display', 'block'); 
	});

	$(window)
		
		.on( 'resize', function() {
		})
		.on( 'scroll', function() {

		});

	// Store the position of the element in position --Scroll Here
	var position = $('#myskill_section').offset(); 
	$(document).scroll(function () {
	    //the current height
	    var y = $(this).scrollTop();
	    //If the current Y is bigger than the element. (you scrolled beyond the element)
	    if(y >= position.top){
	        $('section.myskill_section .my-progress .tuan_progress').addClass('run-progess');
	    }else{
	        //do something else 
	    }
	});



		$('.tlt').textillate({
		  selector: '.texts',
		  // enable looping
		  loop: true,
		  // sets the minimum display time for each text before it is replaced
		  minDisplayTime: 2000,
		  // sets the initial delay before starting the animation
		  // (note that depending on the in effect you may need to manually apply 
		  // visibility: hidden to the element before running this plugin)
		  initialDelay: 0,
		  // set whether or not to automatically start animating
		  autoStart: true,
		  // custom set of 'in' effects. This effects whether or not the 
		  // character is shown/hidden before or after an animation  
		  inEffects: [],
		  // custom set of 'out' effects
		  outEffects: ['flash'],
		  // in animation settings
		  in: {
		  	// set the effect name
		    effect: 'fadeInLeft',
		    // set the delay factor applied to each consecutive character
		    delayScale: 1.5,
		    // set the delay between each character
		    delay: 50,
		    // set to true to animate all the characters at the same time
		    sync: false,
		    // randomize the character sequence 
		    // (note that shuffle doesn't make sense with sync = true)
		    shuffle: false,
		    // reverse the character sequence 
		    // (note that reverse doesn't make sense with sync = true)
		    reverse: true,
		    // callback that executes once the animation has finished
		    // callback: function () {}
		  },
		  
		  // out animation settings.
		  out: {
		    effect: 'flash',
		    delayScale: 1.5,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    // callback: function () {}
		  },
		  // callback that executes once textillate has finished 
		  // callback: function () {},
		  // set the type of token to animate (available types: 'char' and 'word')
		  type: 'char'
		});

		$('.tlt2').textillate({
		  selector: '.texts',
		  // enable looping
		  loop: true,
		  // sets the minimum display time for each text before it is replaced
		  minDisplayTime: 1000,
		  // sets the initial delay before starting the animation
		  // (note that depending on the in effect you may need to manually apply 
		  // visibility: hidden to the element before running this plugin)
		  initialDelay: 0,
		  // set whether or not to automatically start animating
		  autoStart: true,
		  // custom set of 'in' effects. This effects whether or not the 
		  // character is shown/hidden before or after an animation  
		  inEffects: [],
		  // custom set of 'out' effects
		  outEffects: ['flash'],
		  // in animation settings
		  in: {
		  	// set the effect name
		    effect: 'flash',
		    // set the delay factor applied to each consecutive character
		    delayScale: 1.5,
		    // set the delay between each character
		    delay: 50,
		    // set to true to animate all the characters at the same time
		    sync: false,
		    // randomize the character sequence 
		    // (note that shuffle doesn't make sense with sync = true)
		    shuffle: false,
		    // reverse the character sequence 
		    // (note that reverse doesn't make sense with sync = true)
		    reverse: false,
		    // callback that executes once the animation has finished
		    // callback: function () {}
		  },
		  
		  // out animation settings.
		  out: {
		    effect: 'flash',
		    delayScale: 1.5,
		    delay: 50,
		    sync: false,
		    shuffle: false,
		    reverse: false,
		    // callback: function () {}
		  },
		  // callback that executes once textillate has finished 
		  // callback: function () {},
		  // set the type of token to animate (available types: 'char' and 'word')
		  type: 'char'
		});
	

})(jQuery); // EOF