const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userMessage = input.value;
  input.value = "";

  appendMessage("You", userMessage, "user-msg");

  const response = await getFakeReply(userMessage);
  appendMessage("Rei.Ai", response, "bot-msg");
});

function appendMessage(sender, text, className) {
  const msg = document.createElement("div");
  msg.className = className;
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getFakeReply(message) {
  // send message to python server
  const res = await fetch("http://localhost:5000/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });
  const data = await res.json();
  return data.reply;
}
