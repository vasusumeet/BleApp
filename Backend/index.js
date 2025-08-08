import express from 'express';
import {PORT, MONGODBUrl} from './config.js';
import cors from 'cors';
import mongoose from 'mongoose';
import dataRoute from './routes/dataRoute.js';
const app=express();
app.use(cors());

app.use(express.json());


app.get('/',(request,response)=>{
    console.log('request received on /');
    return response.status(200).send('MarsheePetTech')
});

app.use('/api',dataRoute);

mongoose
  .connect(MONGODBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('App is connected to Database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
process.exit(1);
  });


export default app;


