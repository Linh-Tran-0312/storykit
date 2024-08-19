FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm@8.8.0
RUN pnpm install
EXPOSE 6006
CMD [ "npm", "run", "story", "--", "--ci" ]