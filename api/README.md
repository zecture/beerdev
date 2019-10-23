#built with docker


# create a docker image
    $ docker build -t "image name" .
    
Sending build context to Docker daemon  6.656kB
Step 1/7 : FROM node:12
---> 11e92fc50c4a
Step 2/7 : WORKDIR /usr/src/app
.....
Successfully built 7c39c4009d22
    

# run docker container from image
    $ docker run -p 49160:8080 apitest   
    
Running on http://0.0.0.0:8080

# see container name/ID
    $ docker ps
    
        CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
        733c0b6b2cfe        apitest             "docker-entrypoint.s…"   6 minutes ago       Up 6 minutes        0.0.0.0:49160->8080/tcp   infallible_meitner
    
# enter container cmd
    $ docker exec -it 733c0b6b2cfe /bin/bash
    
root@733c0b6b2cfe:/usr/src/app# ls
Dockerfile  README.md  node_modules  package-lock.json  package.json  server.js

        
