import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectToDb } from './config/db.js';
import productRouter from './routes/productRoutes.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(express.json());

app.use('/api/products',productRouter);

if(process.env.NODE_ENV === 'production'){
   app.use(express.static(path.join(__dirname,"/frontend/dist")));
   app.use('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,"frontend",'dist','index.html'));
   })
}

app.get('/',(req, res) => {
   res.send('Server is ready')
})

app.listen(PORT, () => {
   connectToDb();
   console.log('app is listening on port ',PORT);
})