document.getElementById("chat-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let userInput = document.getElementById("user-input").value.trim();
  if (userInput !== "") {
    let messagesContainer = document.getElementById("messages-container");
    let newMessage = document.createElement("div");
    newMessage.classList.add("message", "user");
    newMessage.innerHTML = `<p>${userInput}</p>`;
    messagesContainer.appendChild(newMessage);
    document.getElementById("user-input").value = "";
  }
});
