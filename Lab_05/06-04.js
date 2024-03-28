const { send } = require('m06_chag_test');

try 
{
    const email = 'saasachasnoit@gmail.com';
    const password = 'ifhi qxby opdl tvgb';
    const message = 'Hello from m06_INS module!';

    send(email, password, message);

    console.log('Email sent successfully');
} 
catch (error) 
{
    console.error('Error sending email:', error);
}