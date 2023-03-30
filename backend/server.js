import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { load, save } from './utility/fileHandler.js'

const app = express();
const PORT = 9999

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

app.get('/api/v1/getPosts', (req, res) => {
  load()
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

app.post('/api/v1/addPost', (req, res) => {
  const data = req.body
  save(data)
  .then(newData => res.json(newData))
  .catch(err => console.log(err))
})

app.listen(PORT, () => console.log('listening on port ' + PORT))