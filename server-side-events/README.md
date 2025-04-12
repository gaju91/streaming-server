## 🎯 Goal

We want to **push real-time updates** from the server to the browser using **Server-Sent Events (SSE)** — a lightweight alternative to WebSockets for one-way communication.

---

## 📦 What Are Server-Sent Events (SSE)?

SSE allows the **server to continuously send updates** to the browser over a single long-lived HTTP connection using the MIME type `text/event-stream`.

This is useful for:
- Live notifications
- Realtime data dashboards
- Stock price updates
- Chat message feeds (from server to client only)

---

## 🧠 Key Concepts in the Code

### ✅ 1. Set Proper Headers

Tell the browser we’re sending an event stream:

```js
res.setHeader('Content-Type', 'text/event-stream');
res.setHeader('Cache-Control', 'no-cache');
res.setHeader('Connection', 'keep-alive');
```

---

### ✅ 2. Keep the Connection Open

SSE keeps a single HTTP connection open. We use `res.write()` to send messages periodically:

```js
res.write(`data: Server time is ${new Date().toLocaleTimeString()}\n\n`);
```

Each message:
- Starts with `data: `
- Ends with **two newlines (`\n\n`)**

---

### ✅ 3. Reconnection is Automatic

If the server crashes or the connection drops, the browser will **automatically reconnect**.

No setup needed — it’s built into the browser.

---

## 🧪 How to Test It

You can test it with the following HTML file:

```html
<!-- sse-test.html -->
<!DOCTYPE html>
<html>
  <head><title>SSE Demo</title></head>
  <body>
    <h2>🔄 SSE Updates</h2>
    <pre id="output">Connecting...</pre>

    <script>
      const output = document.getElementById('output');
      const source = new EventSource('http://localhost:3000/events');

      source.onmessage = (event) => {
        output.textContent += '\n' + event.data;
      };

      source.onerror = () => {
        output.textContent += '\n⚠️ Connection lost... reconnecting.';
      };
    </script>
  </body>
</html>
```

Just open it in your browser while your server is running.

---

## 🛠️ Why Use SSE Instead of WebSockets?

- ✅ Built-in reconnection
- ✅ Simple HTTP — no protocol upgrade needed
- ✅ Supported by all modern browsers
- ✅ Perfect for one-way updates (notifications, live scores, etc.)