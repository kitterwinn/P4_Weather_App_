// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js


// Spokane Weather!
$.simpleWeather({
    location: 99201,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#spokane .currently').text(weather.currently);
      $('#spoakne .temp').text(weather.temp);
      $('#spokane .city').text(weather.city);
      $('#spokane img').attr('src', weather.image);
	  $('#spokane .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#spokane figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#spokane figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#spokane figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#spokane figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#spokane figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#spokane figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#spokane figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#spokane figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#spokane figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#spokane figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#spokane figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#spokane figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#spokane figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#spokane figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#spokane figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#spokane figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#spokane figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#spokane figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#spokane figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var phoenixIconCode = 'icon-' + weather.code;
	  var phoenixIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var phoenixIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var phoenixIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var phoenixIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var phoenixIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#spokane i:nth-child(1)').attr('class', phoenixIconCode );
		$('#spokane .day1 i').attr('class', phoenixIconCodeDay1 );
		$('#spokane .day2 i').attr('class', phoenixIconCodeDay2 );
		$('#spokane .day3 i').attr('class', phoenixIconCodeDay3 );
		$('#spokane .day4 i').attr('class', phoenixIconCodeDay4 );
		$('#spokane .day5 i').attr('class', phoenixIconCodeDay5 );
 
		//get condition code
      
		if (weather.code >= 0 && weather.code <= 8) {
          $('#spokane').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#spokane').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#spokane').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#spokane').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#spokane').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#spokane').addClass('bad');
          }
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });