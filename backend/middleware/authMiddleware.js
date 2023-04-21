import { createHmac } from 'crypto';

export const encryptPassword = (req, _, next) => {
  const hmac = createHmac('sha512', req.body.password)
  req.body.password = hmac.digest('hex')
  console.log(req.body.password)
  next();
}

export const verifyToken = (req, res, next) => {
	const token = req.cookies.token
	try {
		const userClaim = verifyToken(token)
		req.user = userClaim
		next()
	} catch(err) {
		console.log(err.message)
		res.status(401).end()
	}
}