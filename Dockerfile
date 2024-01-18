# Use an official Node.js runtime as a base image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

RUN apt-get update -y \
&& apt-get upgrade -y \
&& apt-get install -y gcc default-libmysqlclient-dev pkg-config \
&& rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install mysqlclient
RUN npm install


# Bundle app source
COPY . ./

# Expose the port on which the Node.js app will run
EXPOSE 3000

# Specify environment variables for MySQL connection
ENV MY_SQL_HOST=127.0.0.1
ENV MY_SQL_USER=root
ENV MY_SQL_PASSWORD=root
ENV MY_SQL_DB=MyN3wP4ssw0rd

#starting the Node.js app
CMD [ "npm", "start"]
