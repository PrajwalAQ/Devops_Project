from flask import Flask
import boto3

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello from Docker on AWS EC2!"

@app.route('/s3')
def list_s3_buckets():
    s3 = boto3.client('s3')
    buckets = s3.list_buckets()
    names = [b['Name'] for b in buckets['Buckets']]
    return f"Buckets: {names}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)