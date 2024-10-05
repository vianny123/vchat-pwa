document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;

    if (userInput.trim() !== '') {
        appendMessage('User: ' + userInput);

        // Simulate a bot response
        setTimeout(function() {
            appendMessage('VChat: This is a response from VChat');
        }, 1000);

        document.getElementById('user-input').value = ''; // Clear input
    }
});

function appendMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to bottom
}
