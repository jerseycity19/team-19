// const { connect } = require('twilio-video');
const Video = Twilio.Video;
const tokens = {
    angelica: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2Nzc0NzAiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJhbmdlbGljYSIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5Njc3NDcwLCJleHAiOjE1Njk2ODEwNzAsImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.gb6_CjLGI0A2fkYaVa9tBEF6UYFcj1XFQ8ug_Tc72Ok",
    bruno: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2Nzc0NDUiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJicnVubyIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5Njc3NDQ1LCJleHAiOjE1Njk2ODEwNDUsImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.I6ygrIsHc5jHG9aWMCJbjuwF2F6KnO3NaejdCKhug00",
    chrystal: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2Nzc0OTEiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJjaHJ5c3RhbCIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5Njc3NDkxLCJleHAiOjE1Njk2ODEwOTEsImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.crldr0AXCErKZJL3hoPy2SI5wyFN5dCOSb7DMACOK3c",
    ahmaad: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2Nzc1MjEiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJhaG1hYWQiLCJ2aWRlbyI6eyJyb29tIjoidGVzdDEifX0sImlhdCI6MTU2OTY3NzUyMSwiZXhwIjoxNTY5NjgxMTIxLCJpc3MiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlIiwic3ViIjoiQUM1M2VlN2M5YjAyOTcxMTE1MThhNmYyZWFlMjcxNDhiNCJ9.rYmky8S5NzWKGJL46SNXY-BLes07834gZYvQJKCp5gU",
    danielle: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2Nzc1MzgiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJkYW5pZWxsZSIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5Njc3NTM4LCJleHAiOjE1Njk2ODExMzgsImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.tQDJ0d4lW6KCjgk81FTAWH9od4vv-8c3Iqlik9BVmx8",
}
document.getElementById("info-submit").addEventListener("click", () => {
    var roomName = document.getElementById("room-name-input").value;
    var tokenValue = document.getElementById("token").value;
    var token = tokens[tokenValue];
    console.log(roomName);
    videoConnect(token, roomName);
});
function videoConnect(token, roomName) {
    Video.connect(token, { 
        name: roomName,
        audio: true,
        video: {width: 640}
    }).then((room) => {
        console.log(room);
        room.participants.forEach(participantConnected);
        room.on('participantConnected', participantConnected);
    
        room.on('participantDisconnected', participantDisconnected);
        room.once('disconnected', error => room.participants.forEach(participantDisconnected));
        const localParticipant = room.localParticipant;
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
    // const div = document.createElement('div');
    div.id = participant.sid;
    div.innerText = participant.identity;
  
    participant.on('trackSubscribed', track => trackSubscribed(div, track));
    participant.on('trackUnsubscribed', trackUnsubscribed);
  
    participant.tracks.forEach(publication => {
      if (publication.isSubscribed) {
        trackSubscribed(div, publication.track);
      }
    });
    document.getElementById("vc-participants").appendChild(div);
    // document.body.appendChild(div);
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