FROM node:alpine  

LABEL app="nextjs" 
LABEL maintainer="narendran"


ENV PORT=4256
ENV HELP_APP_URL=https://google.com

#test-1  checking , whether localhost endpoint work since both server and app inside the docker.
ENV API_URL=http://localhost:${PORT}

WORKDIR /nextjs-app

COPY . .

RUN yarn install \ 
    && yarn build 


EXPOSE ${PORT}

CMD ["yarn","start"]
