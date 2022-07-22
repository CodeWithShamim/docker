// 1. create docker file using Dockerfile 
// 2. added (FROM node:alpine
//     COPY . /test
//     WORKDIR /test
//     CMD node test.js) into this file

// docker build command (docker build -t docker-test .)
// run docker file(docker run Repo - name)
// login for docker (docker login)
// create docker file for upload in docker hub ((docker tag 2a761e2d869e codewithshamim/docker-test))
// upload file in docker hub (docker push codewithshamim/docker-test)