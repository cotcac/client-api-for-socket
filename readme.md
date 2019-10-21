# Socket server
This socket server help you communicate with client.

![Alt][1]

[1]: /socket.png "Title"
# Demo

![Alt][2]

[2]: /socket.gif "Title"
# Quick start

## First run Redis server

```
docker run --name redis --net=mynet -d -e ALLOW_EMPTY_PASSWORD=yes bitnami/redis:latest
```
## Then Run the app
Create .env file copy from .env.example

```
docker-compose up
```
# Socker Service
https://github.com/cotcac/socket

