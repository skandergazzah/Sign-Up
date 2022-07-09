const express = require('express');
const router = express.Router();
const signUpTemplateCopy=require('../models/SignUpModels')
const bcrypt = require('bcrypt'); //secure password

router.post('/signup',async(request,response) =>{
    
    const saltPassword = await bcrypt.genSalt(10) //"salt" : malhou hahah :yhawlou des #zijéd"euç"e7_çHJ meme si la chaine est la meme
    const securePassword = await bcrypt.hash(request.body.password, saltPassword) //"hash" ycodih le meme pour le meme password

    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:securePassword
    })
    signedUpUser.save()
    .then(data => {response.json(data)})
    .catch(error =>{response.json(error)})
})

module.exports = router