geost-ws
========

Node.js application to serve as a web-service over geost database

# Installing on ubuntu

- Make sure you have git installed. If not:
```
  $ sudo apt-get install git
```
- You will also need nodejs:
```
  $ sudo apt-get install nodejs
```
- And npm:
```
  $ sudo apt-get install npm
```

- Now, clone the repository into the user's home folder 
```
  $ cd ~/
  $ git clone https://github.com/marpontes/geost-ws.git
```

- Start the application
```
  $ cd geost-ws
  $ npm install
  $ nodejs app.js
```

The server will start listening on the port 8080. 

#### Security

Make sure that no firewall or rule is blocking access to this port.

On Amazon EC2 you will have to add an inbound tcp rule to the port, if you want to access it directly.

On Ubuntu, use iptables to allow it:
```
  $ sudo iptables -A INPUT -p tcp --dport 8080 -j ACCEPT
```
