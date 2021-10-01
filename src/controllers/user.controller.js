const User = require("../models/user");
const userCtrl = {}

userCtrl.signUp = async ( req,res) =>{

    try
    {
        var user = await new User(req.body);
        await user.save();
        return res.status(200).json({"msg":"User created"});
    }
    catch(err)
    {
        return res.status(400).json({"error":err.message});
    }
    
}

userCtrl.logIn = async ( req, res) =>{
    try
    {
      var user = await User.findOne({username:req.body.username})
                                
      const passCorrect = ( user == null) ? false: ( user.password == req.body.password)
                                         
      if ( !passCorrect)
      {
        return res.status(401).json({"error":"Invalid username or password"})
  
      }

      return res.status(200).json({"msg":"Welcome to health care"})

      
    }
    catch(err)
    {
      res.status(400).json(err)
    }
} 

module.exports = userCtrl;
