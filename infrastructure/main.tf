provider "aws" {
    region     = "us-east-1"
}

resource "aws_iam_role" "chore_divvy_role" {
    name = "chore_divvy_role"
    assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": {
        "Sid": "",
        "Effect": "Allow",
        "Action": "sts:AssumeRole",
        "Principal": {
            "Service": "ec2.amazonaws.com"
        }
    }
}
EOF
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
}

resource "aws_instance" "chore_divvy_server" {
  ami               = var.ami
  instance_type     = "t2.micro"

  root_block_device {
      volume_type = "gp2"
      volume_size = 10 
  }
}
