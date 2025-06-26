## DevOps_Project: Dockerized Fullstack App with AWS EC2 and S3

## 📌 Overview

This project is a fullstack application that combines a React.js frontend and a Flask backend, deployed using Docker on an AWS EC2 Ubuntu instance. It supports cloud integration with AWS S3 via IAM roles and provides automated deployment using a deploy.sh script and optional cloud-init script.

🚀 Features

✅ React.js frontend (Dockerized with NGINX)

✅ Flask backend (Dockerized)

✅ Container orchestration with docker-compose

✅ Hosted on AWS EC2 (Ubuntu 22.04)

✅ S3 access via IAM role (no keys stored)

✅ Automated provisioning using deploy.sh

✅ Bonus: Optional cloud-init script for boot-time setup

🛠️ Tech Stack

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
