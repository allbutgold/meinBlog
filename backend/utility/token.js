import jwt from 'jsonwebtoken';

export const createToken = (user) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return token;
}

export const veryfiyJWTToken = (token) => {
	const result = jwt.veryfiy(token, process.env.JWT_SECRET)
	return result
}
