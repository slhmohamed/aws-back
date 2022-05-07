const express = require('express');
const router = express.Router();
const fs = require('fs');
exports.createEC2Instance=function createEC2Instance(req,res){
    

try {
  var data = fs.readFileSync('modules_Terraform/format.tf', 'utf8');
    data=data.replace("{Region}",req.body.Region)
  data=data.replace("{ami}",req.body.ami)
  data=data.replace("{instance_type}",req.body.instance_type)
  data=data.replace("{instanceTagName}",req.body.instanceTagName)
   fs.writeFile('modules_Terraform/Calcul/ec2/_variables.tf', data, err => {
    if (err) {
      console.error(err);
    
} 
})
var data = fs.readFileSync('modules_Terraform/Calcul/ec2/_variables.tf', 'utf8');
 return res.status(200).send({ status: true })

} catch (err) {
    
  console.error(err);
  return res.status(400).send({ status: flase })
}

}



