FROM ubuntu:noble

#Building MegaCMD

RUN apt-get update && apt-get install -y curl \
    && curl -O https://mega.nz/linux/repo/xUbuntu_24.04/amd64/megacmd-xUbuntu_24.04_amd64.deb \
    && apt-get install -y "$PWD/megacmd-xUbuntu_24.04_amd64.deb" \
    && rm "$PWD/megacmd-xUbuntu_24.04_amd64.deb" \
    && rm -rf /var/lib/apt/lists/*

CMD ["mega-cmd-server"]

#Install Node.js

RUN apt-get update && apt-get install -y \
    software-properties-common \
    npm
RUN npm install npm@latest -g && \
    npm install n -g && \
    n latest

RUN docker build -t megacmd /MegaVideoServer
    docker run -p 8080:8080 megacmd

    
EXPOSE 8080
CMD ["npm", "start"]