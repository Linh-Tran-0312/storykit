FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 6006
CMD [ "npm", "run", "story", "--", "--ci" ]