# NextJS explored

This app is deployed to vercel. [https://nextjs-course-app-two.vercel.app/](https://nextjs-course-app-two.vercel.app/)

## Containerized

This simple apps is containerized to check the server capabilites inside conatainer environment like does it needs
the external ip for server access in the frontend. Localhost is good when inside the container.
The container image is hosted in [Quay](quay.io).

In the image , `4256` is the port exposed by default.

You can get the container image with docker or podman.

```
docker pull quay.io/narendev/simple-nextjs
```

> ### NOTE when passing **New Values** for env variables while running the container
>
> when passing value for the
> PORT, that same value must be supplied to API_URLs' port, so it should eg: --env PORT=1234 --env API_URL=http://localhost:1234
> because we use the port value to start the app and that same value must be set in the environment.

example:

```

docker run -d --env PORT=8008 --env API_URL=http://localhost:8008 -p 4200:8008 quay.io/narendev/simple-nextjs

```

## Typescript support in nextjs

NextJS supports typescript out of the box. Add tsconfig.json file and start next dev with `yarn dev` , it'll detect we are trying to use typescript immediately.

> This app doesn't use typescript.

We can install `typescript` and `@types/react` by yarn:

```

yarn add --dev typescript @types/react

```
