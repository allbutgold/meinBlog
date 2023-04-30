import { getDb } from '../utility/db.js'

const COL = 'comments'

export const addComment = async (req, res) => {
  try {
    const db = await getDb()
    const { username, comment, timestamp } = req.body
    const doc = { username, comment, timestamp }
    const result = await db.collection(COL).insertOne(doc)
    res.json(result)
  }catch(err) {
    res.sendStatus(500)
    console.log(err)
  }
}

export const getComments = async (req, res) => {
  try {
    const db = await getDb()
    const docs = await db.collection(COL).find().toArray()
    res.json(docs)
  }catch(err) {
    res.sendStatus(500)
  }
}