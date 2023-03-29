import express from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();
const PORT = 9999

app.use(express.json())
app.use(cors({ origin: "http://localhost:5174" }))

app.get('/api/v1/getPosts', (req, res) => {
  res.end('laueft')
})


app.listen(PORT, () => console.log('listening on port ' + PORT))