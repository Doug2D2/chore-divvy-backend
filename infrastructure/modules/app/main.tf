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
    user_data              = file("./modules/app/userdata.sh")
    iam_instance_profile   = var.iam_profile_name
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
