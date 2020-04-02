#! /bin/bash
sudo yum update -y
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_13.x | sudo -E bash -
sudo yum install nodejs -y
sudo npm install -g pm2
export NODE_ENV=qa
cd /home/ec2-user
aws s3 cp s3://chore-divvy/chore-divvy-backend.tar .
tar -xvf chore-divvy-backend.tar
rm chore-divvy-backend.tar
cd chore-divvy-backend
npm install
npm start
