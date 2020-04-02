provider "aws" {
    region     = "us-east-1"
}

resource "aws_iam_role" "chore_divvy_role" {
    name               = "chore_divvy_role"
    assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [{
        "Sid": "",
        "Effect": "Allow",
        "Action": "sts:AssumeRole",
        "Principal": {
            "Service": "ec2.amazonaws.com"
        }
    }]
}
EOF

    tags = {
        App = "ChoreDivvy"      
    }
}

resource "aws_iam_instance_profile" "chore_divvy_profile" {
  name = "chore_divvy_profile"
  role = aws_iam_role.chore_divvy_role.name
}

resource "aws_iam_policy" "chore_divvy_policy" {
  name   = "chore_divvy_policy"
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:GetObject",
        "s3:ListAllMyBuckets",
        "s3:ListBucket"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_iam_policy_attachment" "chore_divvy_attachment" {
  name       = "chore_divvy_attachment"
  roles      = [aws_iam_role.chore_divvy_role.name]
  policy_arn = aws_iam_policy.chore_divvy_policy.arn
}

resource "aws_db_instance" "chore_divvy_db" {
    allocated_storage                   = 20
    engine                              = "postgres"
    instance_class                      = "db.t2.micro"
    storage_type                        = "gp2"
    name                                = "chore_divvy"
    username                            = var.db_username
    password                            = var.db_password
    iam_database_authentication_enabled = true

    tags = {
        Name = "ChoreDivvy-DB"
        App  = "ChoreDivvy"      
    }
}

resource "aws_security_group" "chore_divvy_app_sg" {
    name        = "chore_divvy_app_sg"
    description = "Security group for Chore Divvy app server"

    ingress {
        from_port   = 8080
        to_port     = 8080
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port   = 0
        to_port     = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

    tags = {
        Name = "ChoreDivvy-App-SG"
        App  = "ChoreDivvy"    
    }
}

resource "aws_instance" "chore_divvy_app" {
    ami                    = var.ami
    instance_type          = "t2.micro"
    key_name               = "chore-divvy"
    user_data              = file("userdata.sh")
    iam_instance_profile   = aws_iam_instance_profile.chore_divvy_profile.name
    vpc_security_group_ids = [aws_security_group.chore_divvy_app_sg.id]

    tags = {
        Name = "ChoreDivvy-App"
        App  = "ChoreDivvy"     
    }

    root_block_device {
        volume_type = "gp2"
        volume_size = 10 
    }
}
