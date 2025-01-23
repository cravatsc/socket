FROM node:23-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

EXPOSE 3001

CMD ["node", "dist/server.js"]