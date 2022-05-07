variable "Region" {
  description = "The AWS region"
  default     = "us-east-2"

}

variable "ami" {
  description = "The AMI (Amazon Machine Image) that identifies the instance"
  default     = "RBEH"
}

variable "instance_type" {
  description = "The instance type to be used"
  default     = "MOUSSA"
}


variable "instanceTagName" {
  description = "instanceTagName"
  default     =  "MM"
}











