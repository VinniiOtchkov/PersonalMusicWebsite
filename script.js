$(document).ready(function() {
  console.log("ready!");

// Assigns variables to the widget and iframe element
  var iframeElement   = document.querySelector('iframe');
  var iframeElementID = iframeElement.id;
  var widget1         = SC.Widget(iframeElement);
  var widget2         = SC.Widget(iframeElementID);


        (function(){
          var widgetIframe = document.getElementById('sc-widget'),
              widget       = SC.Widget(widgetIframe);

          widget.bind(SC.Widget.Events.READY, function() {
            widget.bind(SC.Widget.Events.PLAY, function() {

              // Gets current song
              widget.getCurrentSound(function(currentSound) {
                console.log('sound ' + currentSound.get('') + 'began to play');
              });
            });

            // Gets current volume of player
            widget.getVolume(function(volume) {
              console.log('current volume value is ' + volume);
            });

            // Sets current volume of the player
            widget.setVolume(100);
          });

        }());


// Returns value of label name
function callback(data){
  console.log(data.label_name);
}
  });
