const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const PORT = process.env.PORT || 4000;

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

const skills = {
  1: 'JavaScript',
  2: 'ReactJS',
  3: 'C#',
  4: 'SQL',
  5: 'Azure',
};

app.get('/', (req, res) => {
  res.render('index.html', { skills: skills });
});

app.listen(PORT, () => console.dir(`Server running on port ${PORT}`));
