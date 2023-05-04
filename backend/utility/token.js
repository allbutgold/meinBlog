import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

export const verifyJWTToken = (token) => {
	const result = jwt.verify(token, JWT_SECRET)
	return result
}

export const createToken = (user) => {
  const payload = {
    _id: user._id,
    role: user.role
  }
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' })
  return token
}