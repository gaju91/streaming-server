## 🎯 Goal

We want to stream a video file (`video.mp4`) from our server to the browser efficiently, so the browser can start playing the video **before the full file is downloaded**, and support features like **pause, resume, and seek**.

---

## 📦 HTTP Streaming with Range Requests

Browsers send a `Range` header when trying to **stream** video. This tells the server:

> “I don’t want the full file yet — just a small chunk from byte X to byte Y.”

This allows:
- Faster start
- Efficient seeking (jumping forward/backward)
- Resuming broken streams

---

## 🧠 Key Concepts in the Code

### ✅ 1. Check the Range Header

If the browser sends `Range: bytes=1000-`, we parse it to extract the **start and end** bytes the browser wants.

```js
const range = req.headers.range;
```

---

### ✅ 2. Use `fs.createReadStream` with a byte range

This allows us to read **only part of the file** instead of the whole thing:

```js
const file = fs.createReadStream(videoPath, { start, end });
```

---

### ✅ 3. Respond with Partial Content

We send HTTP status `206 Partial Content` and include a `Content-Range` header.
## 🔍 Why Not Just Use `express.static`?

Using `express.static()`:
- Is great for simple file serving.
- **Doesn't give control** over range requests or streaming headers.

Using `fs.createReadStream()` manually:
- Lets us fully control streaming behavior.
- Helps if you want to log access, throttle speed, secure video, etc.