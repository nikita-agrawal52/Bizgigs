const customerModel = require('../model/CustomerModel');
const nodemailer = require('nodemailer');

const { BIZGIG_EMAIL, BIZGIG_PASS, NIKI_EMAIL, MAYANK_EMAIL } = require('../config')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: BIZGIG_EMAIL,
        pass: BIZGIG_PASS
    }
});

exports.createCustomer = async (req, res) => {


    try {
        let payload = req.body;
        let customer = await customerModel.create(payload);
        const mailOptions = {
            from: BIZGIG_EMAIL,
            to: [NIKI_EMAIL, MAYANK_EMAIL
            ],
            subject: 'New Customer Request',
            text: `New customer request submitted:\n\nName: ${customer.name}\nPhone: ${customer.phone}\nEmail: ${customer.email}\nMessage: ${customer.message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
        res.status(200).json({
            success: true,
            message: "User Query Submitted Successfully",
            customer
        })
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({
            success: false,
            message: "Failed to submit user query",
            error: error.message
        });

    }

}