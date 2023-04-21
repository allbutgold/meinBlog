import { getDb } from './db.js'
import { ObjectId } from 'mongodb'


const COL = 'posts'

export const getPosts = async (req, res) => {
  try {
    const db = await getDb()
    const docs = await db.collection(COL).find().toArray()
    res.json(docs)
  }catch(err) {
    console.error(err)
    res.sendStatus(500)
}
}

export const getPostById = async (req, res) => {
  try {
    const db = await getDb()
    const docs = await db.collection(COL).findOne({_id: new ObjectId(req.params.id)})
    res.json(docs)
  }catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
}

export const addPost = async (req, res) => {
  try {
    req.body.image = req.file.path
    const db = await getDb()
    const result = await db.collection(COL).insertOne(req.body)
    
  }catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
}
