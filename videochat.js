// const { connect } = require('twilio-video');
const Video = Twilio.Video;
const tokens = {
    angelica: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2NzM2OTEiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJhbmdlbGljYSIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5NjczNjkxLCJleHAiOjE1Njk2NzcyOTEsImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.CeWFqPkjwEkknpg5NFf6YtOD1rGTFzImB3-3MHC6wys",
    bruno: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2NzM2MTkiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJicnVubyIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5NjczNjE5LCJleHAiOjE1Njk2NzcyMTksImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.UkgewaMdMcoHPY-pP60mid42V4Y1moL6cg7gHKFe9Ao",
    chrystal: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2NzM2NDQiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJjaHJ5c3RhbCIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5NjczNjQ0LCJleHAiOjE1Njk2NzcyNDQsImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.jrh9u4cZ1fq6_gS9-XyotwMqcXhsPSnO7pRiq0Bw1fY",
    ahmaad: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2NzM2NjMiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJhaG1hYWQiLCJ2aWRlbyI6eyJyb29tIjoidGVzdDEifX0sImlhdCI6MTU2OTY3MzY2MywiZXhwIjoxNTY5Njc3MjYzLCJpc3MiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlIiwic3ViIjoiQUM1M2VlN2M5YjAyOTcxMTE1MThhNmYyZWFlMjcxNDhiNCJ9.n3zCNmUMHPInPLtl0JcDTnid1ZLtNb-QzgKUpNtq1eY",
    danielle: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2NzM2NzkiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJkYW5pZWxsZSIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5NjczNjc5LCJleHAiOjE1Njk2NzcyNzksImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.304uLfV4yk4ZTMfS-FI4MK9tbuIOx_y5aZDh3AAef5c"
}
document.getElementById("info-submit").addEventListener("click", async () => {
    var roomName = document.getElementById("room-name-input").value;
    var tokenValue = document.getElementById("token").value;
    var token = tokens[tokenValue];
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