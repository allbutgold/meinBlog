import { getDb } from '../utility/db.js'
import { ObjectId } from 'mongodb'
import multer from 'multer'
const COL = 'galleries'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './img/galleries')
  }, filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
}).array('postGalleryImages')

export const addGalleries = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) {
        console.log(err)
        res.status(500).end()
      }else {
        const db = await getDb()
        const imagePaths = req.files.map(file => file.path)
        const result = await db.collection(COL).insertOne({postGalleryImages: imagePaths, title: req.body.title})
        console.log(result)
        res.json({message: 'success'})
      }
    })
  }catch(err) {
    console.log(err)
    res.status(500).end()
  }
}

export const getGalleries = async (req, res) => {
  try {
    const db = await getDb()
    const docs = await db.collection(COL).find().toArray()
    res.json(docs)
  }catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
}

export const getGalleryById = async (req, res) => {
  try {
    const db = await getDb()
    const docs = await db.collection(COL).findOne({_id: new ObjectId(req.params.id)})
    res.json(docs)
  }catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
}

export const deleteGalleryById = async (req, res) => {
  try {
    req.params.id
    const db = await getDb()
    const result = await db.collection(COL).deleteOne({_id: new ObjectId(req.params.id)})
    console.log(result)
    res.json({message: 'success'})
  }catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
}