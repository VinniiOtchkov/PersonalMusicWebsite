$('#signup').hide();

$(document).ready(function() {
  console.log("ready!");

  $('#signup').show();


  $(".button2").click(function(e) {
      e.preventDefault();

      $('#norrisStuff').remove();

$.ajax({

    type:"GET",
    url:"http://api.icndb.com/jokes/random",
    success: function(data){


      var norris=data.value.joke;
      var norris = norris.replace(/Chuck Norris/g,'Vinnii').replace('Chuck','Vinnii').replace(/&quot;/g,'"')

      console.log(norris.replace(/Chuck Norris/g,'Vinnii').replace('Chuck','Vinnii').replace(/&quot;/g,'"'));

      $('#norrisText').append(`<p id = "norrisStuff">${norris}</p>`);
    }

  })
  //  $.get("https://us16.api.mailchimp.com/3.0/lists/4474f89949/members
  // ",function(data){
  //
  //     console.log(data);
  //
  // });

});

  // $("body").css("display", "none");
  // $("body").fadeIn(600);


// Assign variables to the widget and iframe element
  var iframeElement   = document.querySelector('iframe');
  var iframeElementID = iframeElement.id;
  var widget1         = SC.Widget(iframeElement);
  var widget2         = SC.Widget(iframeElementID);


        (function(){
          var widgetIframe = document.getElementById('sc-widget'),
              widget       = SC.Widget(widgetIframe);

          widget.bind(SC.Widget.Events.READY, function() {
            widget.bind(SC.Widget.Events.PLAY, function() {

              // $('.g-background-default').css('background-color', 'transparent');
              // $('.g-background-default',$('iframe').contents()).removeClass('g-background-default');



              // Gets current song
              // widget.getCurrentSound(function(currentSound) {
              //   console.log('sound ' + currentSound.get('') + 'began to play');
              // });

            });

            // Sets current volume of the player
            widget.setVolume(95);

            // Gets current volume of player
            var volumey =widget.getVolume(function(volume) {
              console.log('Current Volume: ' + volume);

              var durationy = widget.getDuration(function(duration){
                console.log('Current Duration: ' +duration);
              })

            });
              $('button.playButton.medium').click(function(){
                return
              })
          });

        }());


// Returns value of label name
function callback(data){
  console.log(data);
}
  });
