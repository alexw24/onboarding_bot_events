FROM node:dubnium-alpine

# Set app installation directory
WORKDIR /usr/src

# Copy auth and lock files into container
COPY package.json ./
COPY .npmrc .

# Install app and dependencies
RUN npm i --production

# Copy over the the rest of the app files
COPY . .

# Remove auth file from final image. 
RUN rm -f .npmrc

CMD ["node", "server.js"]
