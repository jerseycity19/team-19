// const { connect } = require('twilio-video');
const Video = Twilio.Video;
const tokens = {
    angelica: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2ODMxNTAiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJhbmdlbGljYSIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5NjgzMTUwLCJleHAiOjE1Njk2ODY3NTAsImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.-f_fE3hfEFcDVq4LHvQIcSEdPaFwc5hE0dk595G9edY",
    bruno: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2ODMxMTciLCJncmFudHMiOnsiaWRlbnRpdHkiOiJicnVubyIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5NjgzMTE3LCJleHAiOjE1Njk2ODY3MTcsImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.J5Bs_U5uMC6eWkqb5UmIzbQC5WUbv--GDA0VZUvTjMs",
    chrystal: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2ODMxNjUiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJjaHJ5c3RhbCIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5NjgzMTY1LCJleHAiOjE1Njk2ODY3NjUsImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.6b1k7bFjNsiLsOzvHviX0SvrdAxNvd34Mdy9e0g6Whw",
    ahmaad: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2ODMxODYiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJhaG1hYWQiLCJ2aWRlbyI6eyJyb29tIjoidGVzdDEifX0sImlhdCI6MTU2OTY4MzE4NiwiZXhwIjoxNTY5Njg2Nzg2LCJpc3MiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlIiwic3ViIjoiQUM1M2VlN2M5YjAyOTcxMTE1MThhNmYyZWFlMjcxNDhiNCJ9.ENI6Vo-h3ezeSLN1qMfgIJSVFOL9KA8oEVZJzWkC8mU",
    danielle: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS2UxM2ExMDk1Yzg0YmVlMjVmNTBmMGVlNjE0NGU4Y2VlLTE1Njk2ODMxOTkiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJkYW5pZWxsZSIsInZpZGVvIjp7InJvb20iOiJ0ZXN0MSJ9fSwiaWF0IjoxNTY5NjgzMTk5LCJleHAiOjE1Njk2ODY3OTksImlzcyI6IlNLZTEzYTEwOTVjODRiZWUyNWY1MGYwZWU2MTQ0ZThjZWUiLCJzdWIiOiJBQzUzZWU3YzliMDI5NzExMTUxOGE2ZjJlYWUyNzE0OGI0In0.BP3cwJHCDJpXacJXTK8PX_s3TUV6phJ5vCopZdj4fW0"
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
        randomQuestions();
    });
}
function randomQuestions() {
  var questions = ['What Role Does Television Play in Your Life and the Life of Your Family?', 'Do You Believe Facebook is Going Extinct?','Active Facebook User or Active Instragram User?', 'What is your favorite subject?', 'What are you passionate about?', 'What do you do as your hobby?'];
  var question = questions[Math.floor(Math.random()*questions.length)];
var txt = question;
document.getElementById("suggestion").innerHTML = txt;
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