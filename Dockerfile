# Use a lightweight Node.js Alpine image
FROM node:20.15.1-alpine

# Use a lightweight Node.js Alpine image
WORKDIR /shobill_fend

# Copy package.json and package-lock.json before installing dependencies
COPY package*.json /shobill_fend

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Next.js project
RUN npm run build

EXPOSE 3000