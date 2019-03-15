

$.ajax({
    method: 'GET',
    dataType: 'json',
    url:'https://rest.bandsintown.com/artists/johnmayer/events?app_id=45press',
    error: function() {
        console.log('error');
      },
    success: function(data) {
      
      $.each( data, function( key, value ) {
        date = data[key].datetime;
        locfinal = "";
        if (data[key].venue.country === "United States") {
            locfinal = data[key].venue.city + ", " + data[key].venue.region;
        } else {
            locfinal = data[key].venue.city + ", " + data[key].venue.country;
        }
        venue = data[key].venue.name;
        buyurl = data[key].url;

    
        final = "<div class='tour-wrapper'><div id='date'>" + moment(date).format('MMMM Do, YYYY') + "</div>"; 
        final += " " + "<div id='venue'>" + venue + "</div>";
        final += " " + "<div id='location'>" + locfinal + "</div>";
        final += " " + "<div id='buyurl'><a href='"+ buyurl + "'>Tickets</a></div></div>";
     
        
      
        $( ".tourdates" ).append(final + "<br>");

      }); // $.each closer
      
    } // success close
    
  }); // $.ajax close


  document.querySelector("h1").addEventListener("click", displayDate);

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

  document.querySelector("h1").addEventListener("click", displayDate);

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }