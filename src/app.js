import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
import path from 'path';


class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://devhouse:devhouse@cluster0.dzdyd.mongodb.net/devhouse?retryWrites=true&w=majority&appName=Cluster0',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(cors());

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    this.server.use(express.json());

  }

  routes(){
    this.server.use(routes);
  }

}

export default new App().server;
