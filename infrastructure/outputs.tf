output "db_endpoint" {
    value = aws_db_instance.chore_divvy_db.endpoint
}

output "server_public_ip" {
    value = "App server running at ${aws_instance.chore_divvy_app.public_ip}:8080"
}
