# DevOps_Project: Dockerized Fullstack App with AWS EC2 and S3

## 📌 Overview

This project is a fullstack application that combines a React.js frontend and a Flask backend, deployed using Docker on an AWS EC2 Ubuntu instance. It supports cloud integration with AWS S3 via IAM roles and provides automated deployment using a deploy.sh script.

## 🚀 Features

✅ React.js frontend (Dockerized with NGINX)

✅ Flask backend (Dockerized)

✅ Container orchestration with docker-compose

✅ Hosted on AWS EC2 (Ubuntu 22.04)

✅ S3 access via IAM role (no keys stored)

✅ Automated provisioning using deploy.sh

✅ Bonus: Optional cloud-init script for boot-time setup

## 🛠️ Tech Stack

Frontend: React.js + CSS

Backend: Flask + Flask-CORS + Boto3

Containerization: Docker & Docker Compose

Cloud: AWS EC2, S3, IAM


## 📁 Project Structure

my-app/
├── frontend (React)

├── backend (Flask)

├── Dockerfile

├── Dockerfile.backend

├── docker-compose.yml

├── deploy.sh

├── requirements.txt

└── README.md (this file)


## 🧑‍💻 Commands to Run Project

#### 🧾 One-time Setup (On EC2)

sudo apt update

sudo apt install -y docker.io docker-compose awscli unzip

#### 🚢 Run Containers (from project root)

docker-compose down

docker-compose up --build -d

#### 🧪 Verify It's Working

Frontend: http://:3000

Backend: http://:5000/api/message


## 🔐 S3 Integration (IAM Role Required)

#### ✅ Grant IAM Role to EC2:

Attach role with AmazonS3FullAccess to the instance.

#### 🧪 Test S3 CLI Access:

aws s3 ls

aws s3 cp test.txt s3://your-bucket-name/


## ⚙️ Deploy Script: deploy.sh

!/bin/bash

sudo apt update

sudo apt install -y docker.io docker-compose

cd ~/my-app || exit

docker-compose down

docker-compose up --build -d

echo "✅ App running at: http://$(curl -s http://checkip.amazonaws.com):3000"

#### To run it:

chmod +x deploy.sh

./deploy.sh

## Screenshots of the running project

### Dockerize the Application

Dockerfile code and the containers(active) in Docker Desktop

![image](https://github.com/user-attachments/assets/a5db77ce-66f3-42be-9e43-1438f65b01f8)

![image](https://github.com/user-attachments/assets/c62eaa4f-f0d4-43d2-97ce-d12c266dbf0e)

![image](https://github.com/user-attachments/assets/ecdb20da-1c32-490b-ab7e-f3948ead915d)

![image](https://github.com/user-attachments/assets/e4d3e917-f5c1-4381-bb92-b7f1bb93af8a)

## Launch and Configure AWS EC2

Run your app in Docker on EC2

EC2 dashboard

![image](https://github.com/user-attachments/assets/2e4beae8-375d-4ce0-97f6-eddef9c41660)


SSH terminal session

![image](https://github.com/user-attachments/assets/31124527-5cdb-4978-a51e-a2cd8de9f0cd)


App running via public EC2 IP

![image](https://github.com/user-attachments/assets/43fcf048-5120-4e37-9e64-cbf69767d4af)

IAM roles to access S3 from EC2

![image](https://github.com/user-attachments/assets/316d0142-b6f9-4af8-853f-0636be091be7)

cloud-init to automate Docker install and app launch on EC2 boot

simple shell script (deploy.sh) that sets up the app

![image](https://github.com/user-attachments/assets/2b829b6e-3cbc-4823-bced-2a754ec83126)

![image](https://github.com/user-attachments/assets/30971a80-2bfa-4450-84ea-78644a3b3f6a)


## ✅ Author

Prajwal Arnald Quadras

🌐 GitHub💬 Public Speaker | Software Developer | Cloud Enthusiast
