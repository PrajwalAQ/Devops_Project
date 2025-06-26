### DevOps_Project: Dockerized Fullstack App with AWS EC2 and S3

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

🧾 One-time Setup (On EC2)

sudo apt update

sudo apt install -y docker.io docker-compose awscli unzip

🚢 Run Containers (from project root)

docker-compose down

docker-compose up --build -d

🧪 Verify It's Working

Frontend: http://:3000

Backend: http://:5000/api/message


## 🔐 S3 Integration (IAM Role Required)

# ✅ Grant IAM Role to EC2:

Attach role with AmazonS3FullAccess to the instance.

# 🧪 Test S3 CLI Access:

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

# To run it:

chmod +x deploy.sh

./deploy.sh
