#!/bin/bash

sudo apt update -y
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker

git clone https://github.com/YOUR_USERNAME/devops-assignment.git
cd devops-assignment

sudo docker build -t myflaskapp .
sudo docker run -d -p 80:5000 myflaskapp
