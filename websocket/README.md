## 🎯 Goal

We want to create a **WebSocket server** using the `ws` package in Node.js and a simple `index.html` page that connects to it.

This will demonstrate:

- Real-time, **two-way communication** between the client and server.
- Sending messages from client ➡️ server and server ➡️ client.
- A clean example for WebSocket setup without extra abstractions.


---

### Create `ws-client.html` for testing

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>WebSocket Test</title>
</head>
<body>
  <h2>💬 WebSocket Client</h2>
  <input type="text" id="msgInput" placeholder="Type a message..." />
  <button onclick="sendMessage()">Send</button>

  <ul id="chatLog"></ul>

  <script>
    const socket = new WebSocket('ws://localhost:3000');
    const log = document.getElementById('chatLog');

    socket.onopen = () => {
      logMessage('🟢 Connected to server');
    };

    socket.onmessage = (event) => {
      logMessage('📥 ' + event.data);
    };

    socket.onclose = () => {
      logMessage('🔴 Disconnected');
    };

    function sendMessage() {
      const input = document.getElementById('msgInput');
      const msg = input.value;
      if (msg) {
        socket.send(msg);
        logMessage('📤 ' + msg);
        input.value = '';
      }
    }

    function logMessage(msg) {
      const li = document.createElement('li');
      li.textContent = msg;
      log.appendChild(li);
    }
  </script>
</body>
</html>
```

---

## 🧪 How to Test

1. Run the server:

2. Open `ws-client.html` in your browser (via Live Server or `http://127.0.0.1:5500/ws-client.html`).

3. You’ll see real-time messaging between browser and server.

---

## 💡 Highlights

- ✅ Real-time bidirectional communication.
- 🔄 Server can push data at any time.
- 🌍 Useful for games, chat apps, live dashboards, and collaborative apps.