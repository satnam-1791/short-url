const jwt = require('jsonwebtoken')

const secret ="Helloword@123"

//const sessionidtouser  = new Map();
const setUser =(user)=>{
//sessionidtouser.set(id,user)
return jwt.sign({
    _id:user._id,
    email:user.email
},secret)

} 

const getuser = (token)=>{
//return sessionidtouser.get(id)
if (!token) return
try {
    return jwt.verify(token,secret)
} catch (error) {
    return null
}

}

module.exports = {
    setUser,getuser
}