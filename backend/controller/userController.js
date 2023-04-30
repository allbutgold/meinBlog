import { getDb } from '../utility/db.js'

const COL = 'users'

export const getUsers = async (req, res) => {
  try {
    const db = await getDb()
    const docs = await db.collection(COL).find().toArray()
    res.json(docs.length)
    console.log(docs)
  }catch(err) {
    res.sendStatus(500)
  }
}