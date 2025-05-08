FROM ubuntu:noble

#Building MegaCMD

RUN apt-get update && apt-get install -y curl \
    && curl -O https://mega.nz/linux/repo/xUbuntu_24.04/amd64/megacmd-xUbuntu_24.04_amd64.deb \
    && apt-get install -y "$PWD/megacmd-xUbuntu_24.04_amd64.deb" \
    && rm "$PWD/megacmd-xUbuntu_24.04_amd64.deb" \
    && rm -rf /var/lib/apt/lists/*

CMD ["mega-cmd-server"]

#Install Node.js

RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_23.x | bash - && \
    apt-get install -y nodejs

RUN npm install
    
EXPOSE 8080
CMD mega-cmd-server & npm start