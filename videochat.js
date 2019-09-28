// const { connect } = require('twilio-video');
const Video = Twilio.Video;
var token = "";
document.getElementById("token-submit").addEventListener("click", () => {
    token = document.getElementById("token-input").value;
    videoConnect();
});
function videoConnect() {
    Video.connect(token, { 
        name: 'room-name',
        audio: true,
        video: {width: 640}
    }).then(room => {
        console.log('Connected to Room "%s"', room.name);
    
        room.participants.forEach(participantConnected);
        room.on('participantConnected', participantConnected);
    
        room.on('participantDisconnected', participantDisconnected);
        room.once('disconnected', error => room.participants.forEach(participantDisconnected));
        const localParticipant = room.localParticipant;
        console.log('above room on')
        room.on('participantConnected', participant => {
            console.log(`Participant "${participant.identity}" connected`);
        
            participant.tracks.forEach(track => {
            document.getElementById('remote-media-div').appendChild(track.attach());
            });
        
            participant.on('trackAdded', track => {
            document.getElementById('remote-media-div').appendChild(track.attach());
            });
        });
    });
}
  function participantConnected(participant) {
    console.log('Participant "%s" connected', participant.identity);
  
    const div = document.createElement('div');
    div.id = participant.sid;
    div.innerText = participant.identity;
  
    participant.on('trackSubscribed', track => trackSubscribed(div, track));
    participant.on('trackUnsubscribed', trackUnsubscribed);
  
    participant.tracks.forEach(publication => {
      if (publication.isSubscribed) {
        trackSubscribed(div, publication.track);
      }
    });
  
    document.body.appendChild(div);
  }
  
  function participantDisconnected(participant) {
    console.log('Participant "%s" disconnected', participant.identity);
    document.getElementById(participant.sid).remove();
  }
  
  function trackSubscribed(div, track) {
    div.appendChild(track.attach());
  }
  
  function trackUnsubscribed(track) {
    track.detach().forEach(element => element.remove());
  }