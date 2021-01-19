# GraphQL API POC

A GraphQL API proof of concept

## Docker instructions

Build the image

```console
$ docker build -t <your username>/graphql-api-poc:latest .
```

Run a container

```
$ docker run -v ${PWD}/src:/usr/src/app -p 4000:4000 -p 5555:5555 -d <your username>/graphql-api-poc
```

Access a shell in the running container

```
$ docker ps
$ docker exec -it <container-id> sh
```

Stop a container

```
$ docker ps
$ docker stop <container-id>
```

## Prisma commands

Run a migration after changing the `schema.prisma` file:

```console
$ npx prisma migrate dev --preview-feature
```

Regenerate prisma client definitions after migration

```console
$ npx prisma generate
```

Open prisma studio

```console
$ npx prisma studio
```
