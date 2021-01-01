# Initial setup

```
npm init => create package.json
# dev dependencies 
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
# https://babeljs.io/docs/en/6.26.3/babel-preset-stage-0

#main dependencies
npm install express express-graphql graphql nodmeon
```

* create index.js and .babelrc
* in package.json add to "scripts" ```"start" : "nodmeon ./index.js --exec babel-node -e js"```
* in babelrc include presets 
  
```
{
    "presets": [
        "env",
        "stage-0"
        ]
}
```
* in index create the main server
```
import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Sending a response!');
});

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));
```

* Now you can run the server! `npm start` 
