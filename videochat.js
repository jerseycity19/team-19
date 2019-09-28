// const { connect } = require('twilio-video');
const Video = Twilio.Video;
document.getElementById("info-submit").addEventListener("click", async () => {
    var roomName = document.getElementById("room-name-input").value;
    var userName = document.getElementById("user-name-input").value;
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2NzMwNjQiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJhbmciLCJ2aWRlbyI6eyJyb29tIjoidGVzdDEifX0sImlhdCI6MTU2OTY3MzA2NCwiZXhwIjoxNTY5Njc2NjY0LCJpc3MiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlIiwic3ViIjoiQUM1M2VlN2M5YjAyOTcxMTE1MThhNmYyZWFlMjcxNDhiNCJ9.iQFQ37OGKqfx1T3tVb8NzZTvSVdBW4b3AYLSdgETpNo";
    videoConnect(token, roomName);
});
function videoConnect(token, roomName) {
    Video.connect(token, { 
        name: roomName,
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