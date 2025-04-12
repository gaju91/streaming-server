# Real-Time Data Streaming Demo 🚀

This project demonstrates various real-time data streaming approaches in an Express.js server. It includes examples for:

- **🎥 Video Streaming** with file piping.
- **📊 Large JSON Streaming** using chunked transfer encoding.
- **⚡ Server-Sent Events (SSE)** for one-way communication to the client.
- **💬 WebSockets** for two-way real-time communication.

## Requirements 📋

- Node.js
- Express.js
- WebSocket

## Installation 🔧

1. Clone the repository:
   ```bash
   git clone https://github.com/gaju91/streaming-server.git
   cd streaming-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Will be developing the following endpoints:
   - `http://localhost:3000/video` - 🎬 Stream a video file.
   ![video-stream-demo](https://github.com/user-attachments/assets/f7268c28-882e-41bf-8839-2f4e74239d8d)

   - `http://localhost:3000/large-json` - 📦 Stream large JSON data in chunks.
   ![chunked-demo](https://github.com/user-attachments/assets/230380a5-9a24-4ed8-aa7f-787f2dcc8273)

   
   - `http://localhost:3000/events` - 🔄 Receive real-time updates via SSE.
   - Use a browser's WebSocket client to test two-way communication.

