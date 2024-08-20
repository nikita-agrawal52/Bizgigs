require ('dotenv').config();
module.exports ={
    PORT : process.env.PORT,
    MONGODB: process.env.MONGO_URL,
    BIZGIG_EMAIL:process.env.EMAIL_USER,
    BIZGIG_PASS:process.env.EMAIL_PASS,
    NIKI_EMAIL:process.env.ADMIN_EMAIL,
    MAYANK_EMAIL:process.env.MAYANK_EMAIL
}