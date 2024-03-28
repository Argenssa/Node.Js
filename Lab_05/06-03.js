const { send } = require('./m06_CHAG');

try 
{
    const email = 'saasachasnoit@gmail.com';
    const password = 'ifhi qxby opdl tvgb';
    const message = 'Hello from m06_CHAG module!';

    send(email, password, message);

    console.log('Email sent successfully');
} 
catch (error) 
{
    console.error('Error sending email:', error);
}