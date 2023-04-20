import { createHmac } from 'crypto';

export const encryptPassword = (req, res, next) => {
  const hmac = createHmac('sha512', req.body.password)
  req.body.password = hmac.digest('hex')
  console.log(req.body.password)
  next();
}