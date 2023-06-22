var socket = io.connect('http://localhost:4000');

var vidChatLobby = document.querySelector('#video-chat-lobby');
var vidChat = document.querySelector('#video-chat');

var roomName = document.querySelector('#roomName');
var joinRoom = document.querySelector('#join');

var userVideo = document.querySelector('#user-video');
var peerVideo = document.querySelector('#peer-video');

joinRoom.addEventListener('click', function() {
    if (roomName.value == '') {
        alert('Please Enter A Room Name');
    } else {
        const constraints = {
            audio: true,
            video: {
              width: 680,
              height: 320
            }
        };
        socket.emit("join", roomName.value);
        getMedia(constraints);
    }
});
async function getMedia(constraints) {
    console.log('Getting User Video');
    let stream = null;
  
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        // Use the stream
        userVideo.srcObject = stream;
        userVideo.onloadedmetadata = function(e) {
            userVideo.play();
        };
    } catch (err) {
        // Handle the error
        alert('Unable to get User Media' + err);
    }
}          