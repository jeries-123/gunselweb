# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all application files
COPY . .

# Build the React app for production
RUN npm run build

# Install 'serve' to serve the built files
RUN npm install -g serve

# Expose the port your app will run on
EXPOSE 5008

# Serve the app
CMD ["serve", "-s", "build", "-l", "5008"]