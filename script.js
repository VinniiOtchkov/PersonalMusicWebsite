$('#signup').hide();

$(document).ready(function() {
  console.log("ready!");

  $('#signup').show();


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
            widget.getVolume(function(volume) {
              console.log('Current Volume: ' + volume);

              widget.getDuration(function(duration){
                console.log('Current Duration: ' +duration);
              })

            });

          });

        }());


// Returns value of label name
function callback(data){
  console.log(data);
}
  });
