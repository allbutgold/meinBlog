import { createHmac } from 'crypto';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const secret = process.env.JWT_SECRET
const COL = 'users'

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

export const authenticate = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).json({ message: "Authentication required" })
    }
    try {
      const decodedToken = jwt.verify(token, secret)
      // console.log(decodedToken._id)
      if (!decodedToken.role) {
        return res.status(403).json({ message: "Unauthorized access" })
      }
      req.user = {}
      req.user.role = decodedToken.role
      req.user._id = decodedToken._id
      next()
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: "Internal server error" })
    }
  }


export const createUserPermission = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: "need admin permissions" })
  }
  next()
}

export const editingPermission = (req, res, next) => {
  if (req.user.role == 'editor' || req.user.role == 'admin') {
    next()
  }else {
    return res.status(403).json({ message: "need editor permissions" })
  }
  
}

