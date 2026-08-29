# Use Node
FROM node:18

# Set working folder
WORKDIR /app

# Copy files
COPY . .

# Install dependencies (safe even if none)
RUN npm install || true

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "server.js"]