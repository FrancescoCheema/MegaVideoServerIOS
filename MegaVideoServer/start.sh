#!/bin/bash

# Start MEGAcmd server in the background
echo "[INFO] Starting MEGAcmd server..."
mega-cmd-server > /dev/null 2>&1 &

# Wait a few seconds to allow MEGAcmd to initialize (optional but recommended)
sleep 3

# Start the Node.js application in the foreground
echo "[INFO] Starting Node.js application..."
npm start
