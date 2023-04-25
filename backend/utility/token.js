import jwt from 'jsonwebtoken';

export const createToken = (user) => {
  const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })

  return token;
}

export const verifyJWTToken = (token) => {
	const result = jwt.verify(token, process.env.JWT_SECRET)
	return result
}
