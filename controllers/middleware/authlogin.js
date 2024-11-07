const {getuser} = require('../service/auth')

const  RestricttologinUser = async(req,res,next)=>{
//const userUID = req.cookies?.uid;
const userUID = req.headers['authorization']
const token = userUID.split('Bearer ')[1]
    if(!userUID) return res.redirect("/login")
        const user = getuser(token);
    if(!user) return res.redirect("/login")
        req.user = user;
     next() 

}

const checkAuth = async(req,res,next)=>{
  //  const userUID = req.cookies?.uid;
    const userUID = req.headers['authorization']
const token = userUID.split('Bearer ')[1]
        const user = getuser(token);
        req.user = user;
     next() 
}


function Restricto(roles=[]){
    return function(req,res,next){
        if(!req.user) return res.redirect("/login")
            if(!roles.includes(req.user.role)) return res.send("unauthorize")

                return next()
            
}
}
module.exports ={ RestricttologinUser,checkAuth}