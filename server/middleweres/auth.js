const jwt = require("jsonwebtoken");
const { SECRET } = require('../config/config')

function auth (req,res, next){
  let authorisationHeaader = req.get('Authorization');
  console.log(authorisationHeaader);

  if(authorisationHeaader){
      let token = authorisationHeaader.split(' ')[1];//Bearer${token}
      
      let decoded = jwt.verify(token, SECRET)
      req.user = decoded
      console.log(req.user);
  
  }
  next();
}

function isAuth(req, res, next) {
  if (!req.user) {
    res.status(401).json({ errorData: { massage: "You cannot this action!" } }); //401 - unAuthorized
  }
  next();
}
module.exports = {
  auth,
  isAuth,
};
