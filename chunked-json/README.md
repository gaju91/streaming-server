## 🎯 Goal

We want to stream **JSON/text data** from the server to the browser **in chunks**, with a short delay between each chunk — without needing the full response to be prepared up front.

This is perfect for:
- Real-time logs
- Progressive data loading
- Simulating live data feeds

---

## 📦 HTTP Streaming with Chunked Encoding

Instead of sending all data at once, we use:

```http
Transfer-Encoding: chunked
```

This tells the browser:

> “I'm sending data in parts. Keep listening — more will come.”

---

## 🧠 Key Concepts in the Code

### ✅ 1. Enable Chunked Transfer Mode

By setting this header, the server tells the client: "Data will come in pieces."

```js
res.writeHead(200, {
  'Content-Type': 'application/json',
  'Transfer-Encoding': 'chunked',
});
```

---

### ✅ 2. Send Data in Intervals

We simulate live data by sending one chunk every 2 seconds using `setInterval()`:

```js
const interval = setInterval(() => {
  res.write(`💡 Chunk ${count} sent at ${count * 2}s\n`);
}, 2000);
```

---

### ✅ 3. End the Stream Gracefully

Once we’re done sending all chunks, we clean up and tell the browser we’re finished:

```js
res.write('🟢 All chunks sent.\n');
res.end();
```

---

## 🔍 Why Use Chunked Streaming?

Chunked transfer is great when:
- You don’t know the full response size in advance
- You want to **stream progressively**
- You’re mimicking a live data source

It helps the browser or client:
- Show real-time updates without reloading
- Handle large datasets without waiting for everything

---

## 🛠️ Real-World Uses

✅ Real-time analytics dashboards  
✅ Server log viewers  
✅ Long-running API responses  
✅ Chat messages and notifications  