# Base image
FROM ubuntu:20.04

# Set non-interactive mode
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies and Node.js
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    git cmake build-essential pkg-config ccache \
    libssl-dev libcurl4-openssl-dev zlib1g-dev libsqlite3-dev \
    libfreeimage-dev libreadline-dev libuv1-dev libtomcrypt-dev \
    curl wget unzip ca-certificates software-properties-common \
    nodejs npm gdebi-core && \
    rm -rf /var/lib/apt/lists/*

# Install MEGAcmd
WORKDIR /tmp
RUN apt-get update && \
    apt-get install -y libfuse2 && \
    wget https://mega.nz/linux/repo/Debian_11/amd64/megacmd-Debian_11_amd64.deb && \
    gdebi -n megacmd-Debian_11_amd64.deb && \
    rm megacmd-Debian_11_amd64.deb

# Copy start script and set permissions before switching to non-root
COPY /start.sh ./start.sh
RUN chmod +x /start.sh

# Now create and switch to non-root user
RUN useradd -m megacmduser
USER megacmduser
ENV HOME=/home/megacmduser

# Ensure MEGAcmd directory is present
RUN mkdir -p $HOME/.megaCmd && \
    chown -R megacmduser:megacmduser $HOME/.megaCmd

# Switch to working directory for the app
WORKDIR /app

# Copy your Node.js app into the container
COPY . .

# Install Node.js dependencies
RUN npm install

# Expose your app's port
EXPOSE 8080
EXPOSE 4443

# Start both MEGAcmd and your Node app
CMD ["/start.sh"]
