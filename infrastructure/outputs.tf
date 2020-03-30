output "db_endpoint" {
    value = aws_db_instance.chore_divvy_db.endpoint
}

output "server_public_ip" {
    value = aws_instance.chore_divvy_server.public_ip
}
