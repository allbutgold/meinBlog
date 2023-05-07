import { getDb } from '../utility/db.js'

const COL = 'users'

export const getUsers = async (req, res) => {
  try {
    const db = await getDb()
    const docs = await db.collection(COL).find().toArray()
    res.json(docs.length)
  }catch(err) {
    res.sendStatus(500)
  }
}

export const checkUserStatus = async (req, res) => {
  const token = req.cookies.token
  if (!token) {
    res.status(401)
  } else {
    res.status(200)
  }res.end()
}