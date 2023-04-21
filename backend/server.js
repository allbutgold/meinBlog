import './config/config.js'
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';
import { load, save } from './utility/fileHandler.js'
import { login, register } from './controller/authController.js'
import { encryptPassword, verifyToken } from './middleware/authMiddleware.js';



const app = express();
const PORT = process.env.PORT || 9999
const upload = multer({ dest: './img' })


app.use(cors({
    origin: true,
    credentials: true
}))

app.use('/img', express.static('./img'))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.status(200).send('All good')
})

app.post('/register', encryptPassword, register)
app.post('/login', encryptPassword, login)

app.get('/user', verifyToken, (req, res) => {
	console.log(req.user)
res.end()
})

// nodemailer
const  NODEMAILER_USER = process.env.NODEMAILER_USER
const  NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASSWORD
  }
})

// email route 
app.post('/api/v1/sendEmail', upload.none(), (req, res) => {
  const emailData = req.body
  console.log(emailData)

  if (!emailData) {
    console.log('email Data not found')
    return;
  }

  const email = emailData.email
  const message = emailData.mailContent
  const newMessage = {
    from: `${email}`,
    to: "sample@sample.com",
    subject: "New Email",
    text: `New Email from (${email})\n${message}`,
    html: `<h1>New Email from (${email})</h1>\n<p>${message}</p>`
  }

  transport.sendMail(newMessage, (err, info) => {
    if (err) console.log('Error', err)
    else console.log('Info', info)
    res.json({message: 'mail sent'})
  })
})


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