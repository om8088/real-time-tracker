# 🛰️ Real-Time Location Tracker

A real-time location tracking application built with **Node.js**, **Socket.io**, and **Leaflet.js**, allowing multiple users on the same local network to share and view each other's live positions on a map.

## 🚀 FEATURES

- 📍 Live location tracking using the browser's Geolocation API
- 🔁 Real-time updates using Socket.io WebSockets
- 🗺️ Interactive maps with Leaflet.js
- 👥 Dynamic markers for multiple users
- ❌ Markers removed when users disconnect
- 📱 Mobile + desktop support over same LAN

## 🛠️ TECHNOLOGIES USED

- Node.js
- Express.js
- Socket.io
- Leaflet.js
- EJS templating engine
- HTML5 / CSS3 / JavaScript

## 🔧 HOW TO USE

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/real-time-tracker.git
   cd real-time-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node app.js
   ```

4. Open on your desktop:

   ```
   http://localhost:3000
   ```

5. Open on your mobile (connected to the same Wi-Fi):

   - Find your computer's IP (e.g., `192.168.1.10`)
   - Open in mobile browser:
     ```
     http://192.168.1.10:3000
     ```

   ⚠️ Mobile will only show your location if:

   - You're on the same Wi-Fi
   - Browser location permission is **granted**
   - It's not in **incognito/private mode**

---

### **CUSTOMIZATION**

- You can assign usernames or colors by prompting the user and sending extra data through `socket.emit()`.
- You can add avatars or group locations using user roles.

- ## 📸 Screenshots

### 💻 Desktop View

![Desktop View](./images/desktop.png)

### 📱 Mobile View

![Mobile View](./images/mobile.png)

## 💻 CLONING THE REPOSITORY

```bash
git clone https://github.com/yourusername/real-time-tracker
cd real-time-tracker
```

Run the app:

```bash
npm install
node app.js
```

Then open:

```bash
http://localhost:3000
```

## 📌 LIVE DEMO

Currently runs on local network only.

---

👨‍💻 Developed by [OmsaiDesai](https://github.com/omsaidesaii)
