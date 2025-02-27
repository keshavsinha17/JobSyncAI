import mongoose from "mongoose"

const googleLogin=async (req,res)=>{
    try {
        const code = req.query;
        const googleRes=await oauth2Client.getToken(code);
        oauth2Client.setCredentials(googleRes.tokens)
        const userRes=await axios.get("https://www.googleapis.com/oauth2/v1/userinfo",{
            headers:{Authorization:`Bearer ${googleRes.tokens.access_token}`}
        })
        const{email,name,picture}=userRes.data;
        let user = await User.findOne({email});
        if(!user){
            user=await User.create({
                name,
                email,
                image:picture
            })
        }
        const token = jwt.sign({_id,email},
            process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES_IN
        });
        return res.status(200).json({
            status:"success",
            user,
            token
        })
    
    } catch (error) {
        res.status(500).json({
            status:"error",
            message:"Something went wrong"
        })
    }
}
export {googleLogin}