const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
        user: "satyashyam717@gmail.com",
        pass: "qvlwfcjecwevqkgf",
    }
})

module.exports.sendEmail = async(to, subject, text) => {
   try{
    let info = await transporter.sendMail({
        from: "satyashyam717@gmail.com",
        to,
        subject,
        text,
    });

    return info;
   } catch(err){
    console.log(err);
    throw err;
   }

}
