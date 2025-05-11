MegaVideoServerIOS

MegaVideoServerIOS is a Dockerized server that enables video streaming from your MEGA cloud storage to iOS devices. It uses MEGAcmd to authenticate and access MEGA files and provides a local HTTP interface that allows you to stream videos directly into iOS applications using native playback components like AVPlayer.

Overview

This project was developed to address the limitations of direct MEGA file access in mobile development environments. By running a lightweight containerized server, developers can test, preview, and stream video content hosted in MEGA within local or emulator-based iOS apps.

Features

Authenticate to MEGA via MEGAcmd inside Docker

Stream video files stored in MEGA through a local server

Compatible with AVPlayer and iOS development workflows

Bind video access to localhost or host IP for easy testing

Lightweight Express-based server setup

Technologies

Docker

Node.js / Express

MEGAcmd CLI

Shell scripting for automation

Getting Started

Prerequisites

Docker installed on your system

A MEGA account (with videos uploaded)

MEGAcmd available in the container

Clone the Repository

git clone https://github.com/FrancescoCheema/MegaVideoServerIOS.git
cd MegaVideoServerIOS

Build the Docker Image

docker build -t megavideoserver .

Run the Container

docker run -d -p 8080:8080 --name megavideoserver megavideoserver

Log into MEGA

You can either configure the container to auto-login or log in manually:

docker exec -it megavideoserver mega-login your-email your-password

Once authenticated, you can fetch or stream videos directly.

Usage

The server is accessible at http://localhost:8080.

You can extend the Express server inside the container to list available videos, stream individual files, or serve content via MEGA public links or mounted WebDAV paths (if enabled).

In iOS, you can stream a file using the following example with AVPlayer:

let player = AVPlayer(url: URL(string: "http://localhost:8080/video.mp4")!)

Make sure the video file is accessible via MEGAcmd and served through the container’s Express route.

Folder Structure

Typical layout inside the container:

/app
  ├── index.js              # Express server entrypoint
  ├── docker-entrypoint.sh  # MEGAcmd login and setup
  └── videos/               # Optional mount point or download target from MEGA

Development Notes

WebDAV support can be enabled via MEGAcmd if needed

You can mount a host directory to serve files locally for testing

Consider handling mega-export for public MEGA links if needed

License

This project is open-source and available under the MIT License.

