import express from 'express';
import fs from 'fs';
import React from 'react';
import App from '../src/App';
import { renderToString} from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

const PORT = process.env.PORT || 3000;

const html = fs.read('dist/index.html').toString();

const parts = html.split('Not rendered');

const app = express();

app.use(webpackDevMiddleware(webpackConfig));

app.use((req, res) => {
    const reactMarkup = (
        <ServerLocation url={req.url}>
            <App />
        </ServerLocation>
    );

    res.send(parts[0] + renderToString(reactMarkup) + parts[0]);
    res.end()

});

console.log('Listing in port ' + PORT);
app.listen(PORT);



