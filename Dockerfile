FROM node:alpine  

LABEL app="nextjs" 
LABEL maintainer="narendran"

# ! import note to keep in mind when passing env variable during running the image, when passing value for the 
# ! PORT, that same value must be supplied to  API_URLs' port, so it should eg: --env PORT=1234 --env API_URL=http://localhost:1234
# ! because we use the port value to start the app and that same value must be set in the environment.

ENV PORT=4256
ENV HELP_APP_URL=https://google.com

#test-1  checking , whether localhost endpoint work since both server and app inside the docker.
# passing of localhost with the port used to start the app works ✅
ENV API_URL=http://localhost:4256

WORKDIR /nextjs-app

COPY . .

RUN yarn install \ 
    && yarn build 


EXPOSE ${PORT}

CMD ["yarn","startindocker"]
