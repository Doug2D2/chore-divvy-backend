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
