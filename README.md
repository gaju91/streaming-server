# Real-Time Data Streaming Demo 🚀

This project demonstrates various real-time data streaming approaches using **Node.js + Express.js**. It includes examples for:

- **🎥 Video Streaming** with file piping.
- **📊 Large JSON Streaming** using chunked transfer encoding.
- **⚡ Server-Sent Events (SSE)** for one-way communication to the client.
- **💬 WebSockets** for two-way real-time communication.

---

## 📋 Requirements

- Node.js
- Express.js
- WebSocket (for WebSocket example)

---

## 🔧 Installation

```bash
git clone https://github.com/gaju91/streaming-server.git
cd streaming-server
npm install
node server.js
```

---

## 📂 Endpoints

### 🎬 `/video` –– [Detailed Instructions](video-stream/README.md) 
Efficient video delivery using HTTP range requests.  
> `http://localhost:3000/video`  
<br>
<img src="https://github.com/user-attachments/assets/f7268c28-882e-41bf-8839-2f4e74239d8d" width="500"/>

---

### 📦 `/chunked` –– [Detailed Instructions](chunked-json/README.md) 
Simulates large file downloads using chunked transfer encoding.  
> `http://localhost:3000/chunked`

<br>
<img src="https://github.com/user-attachments/assets/230380a5-9a24-4ed8-aa7f-787f2dcc8273" width="500"/>
---

### 🔄 `/events` – [Detailed Instructions](server-side-events/README.md) 
Receive real-time one-way updates pushed from the server.  
> `test using file given in folder running on local server`  
<br>
<img src="https://github.com/user-attachments/assets/ab591acb-32e9-49fb-a7e3-15a7b03dd157" width="500"/>

---

### 💬 `/ws` – [Detailed Instructions](websocket/README.md)
Use a WebSocket client to connect and test two-way communication.  
> `test using file given in folder running on local server`
<br>
<img src="https://github.com/user-attachments/assets/0967a226-cec8-4573-8d5e-0ec1f2d0d322" width="500"/>

