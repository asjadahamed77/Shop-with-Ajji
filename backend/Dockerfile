# Fix: Use a valid Node.js base image, replacing '20' with 'node:20-alpine' for a lightweight Node.js environment.
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Expose port 8000 for the application
EXPOSE 8000

# Command to run your application using Node.js
CMD ["node", "index.js"]
