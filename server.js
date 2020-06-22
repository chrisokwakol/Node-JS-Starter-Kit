import express from 'express';
import path from 'path';
// import open from 'open';
import webpack from 'webpack';
import webpackConfig from './webpack.config.dev.';
// import { config } from 'process';

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

/* eslint-disable no-console */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}) );

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${port}`)
    // open('http://localhost:' + port);
  }
});