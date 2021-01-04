FROM node:12
RUN mkdir /lmsproject
WORKDIR /lmsproject
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8091
CMD node app.js


