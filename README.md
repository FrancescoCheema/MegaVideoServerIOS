MegaVideoServerIOS is a Dockerized server solution designed to stream video content directly from your MEGA cloud storage to iOS devices. It leverages MEGAcmd for cloud authentication and file handling, making it an ideal backend for testing or deploying MEGA-hosted videos in mobile apps.

⚙️ Features
🔐 Secure login via MEGAcmd

☁️ Stream videos directly from MEGA cloud

📱 Optimized for iOS video playback

🐳 Docker-ready for easy deployment

🔁 Supports WebDAV and HTTP endpoints for streaming

🧰 Technologies Used
MEGAcmd – CLI tool to interface with MEGA cloud

Node.js / Express – Lightweight server

Docker – Containerization

WebDAV (optional) – For iOS video access

🚀 Setup & Usage
1. Clone and Build
bash
Copy
Edit
git clone https://github.com/FrancescoCheema/MegaVideoServerIOS.git
cd MegaVideoServerIOS
docker build -t megavideoserver .
2. Run the Container
bash
Copy
Edit
docker run -p 8080:8080 megavideoserver
3. Login to MEGA (if not automated)
bash
Copy
Edit
docker exec -it <container_name> mega-login your-email your-password
Alternatively, modify the container to auto-login using environment variables or MEGAcmd config.

4. Stream Your Videos
Your videos stored on MEGA will be accessible through the local server. You can stream them in your iOS app using AVPlayer by pointing to:

bash
Copy
Edit
http://localhost:8080/your-video.mp4
Or use WebDAV if you’ve configured it via MEGAcmd:

bash
Copy
Edit
http://localhost:4443/your-mega-folder/video.mp4
📱 iOS Integration
Use AVPlayer or any compatible streaming library to play videos from the exposed local/WebDAV URL. Make sure your iOS simulator or device can access the host machine’s IP if not using localhost.

🧪 Development Notes
MEGAcmd must be running inside the container.

Consider using mega-export to create public links if sharing outside localhost.

Logs and error handling can be extended via Express middleware.

🤝 Contributing
Pull requests and suggestions are welcome.
