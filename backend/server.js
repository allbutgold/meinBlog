import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { load, save } from './utility/fileHandler.js'


const app = express();
const PORT = process.env.PORT || 9999
const upload = multer({ dest: './img' })

app.use(cors({ origin: "*" }))
app.use('/img', express.static('./img'))

app.get('/api/v1/getPosts', (req, res) => {
  load()
  .then(data => res.json(data))
  .catch(err => console.log(err))
})

app.get('/api/v1/getPosts/:id', (req, res) => {
  const id = req.params.id
  load()
  .then(data => {
  const singlePost = data.find(post => post.id === id)
  res.json(singlePost) 
})

  .catch(err => console.log(err))
})

app.post('/api/v1/addPost', upload.single('postImage'), (req, res) => {
  const data = req.body
  data.postImage = req.file.path
  console.log(req.file)

  save(data)
  .then(newData => res.json(newData))
  .catch(err => console.log(err))
})

app.listen(PORT, () => console.log('listening on port ' + PORT))