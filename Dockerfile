# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build Next.js app
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]

