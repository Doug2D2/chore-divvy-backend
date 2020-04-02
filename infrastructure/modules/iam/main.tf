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
