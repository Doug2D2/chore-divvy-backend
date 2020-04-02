provider "aws" {
    region = "us-east-1"
}

module "iam" {
    source = "./modules/iam"
}

module "db" { 
    source = "./modules/db"

    db_username = var.db_username
    db_password = var.db_password
}

module "app" {
    source = "./modules/app"

    ami = var.ami
    iam_profile_name = module.iam.profile_name
}
