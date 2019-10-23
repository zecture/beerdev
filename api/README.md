## built with docker

## create a docker image
```bash
$ docker build -t apitest .
    
Sending build context to Docker daemon  6.656kB
Step 1/7 : FROM node:12
---> 11e92fc50c4a
Step 2/7 : WORKDIR /usr/src/app
.....
Successfully built 7c39c4009d22
```

## run docker container from image
```bash
$ docker run -p 49160:8080 apitest   
    
Running on http://0.0.0.0:8080
```
## see container/image name/ID
//see docker container
```bash
$ docker ps
    
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
        733c0b6b2cfe        apitest             "docker-entrypoint.s…"   6 minutes ago       Up 6 minutes        0.0.0.0:49160->8080/tcp   infallible_meitner
```   
//see docker images
```bash
$ sudo docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
apitest             latest              7c39c4009d22        35 minutes ago      911MB
```

## enter container cmd
```bash
$ docker exec -it 733c0b6b2cfe /bin/bash
```
```bash    
root@733c0b6b2cfe:/usr/src/app# ls
Dockerfile  README.md  node_modules  package-lock.json  package.json  server.js
```
        
## remove container / image


