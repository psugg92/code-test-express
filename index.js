const express = require('express');
const app = express();
const cors = require('cors');
const Member = require('./models/member');

app.get('/members', cors(), (_req, res) => {
  Member.forge().fetchPage({withRelated: ['subscription'] })
    .then(members => res.json({ error: false, data: members.toJSON() }))
    .catch(error => console.error(error));
});

app.get('/members/:id', cors(), (_req, res) => {
  let id = _req.params.id;
  Member.where({subscription_id: id}).fetchAll()
      .then(members => res.json({ error: false, data: members.toJSON() }))
      .catch(error => console.error(error));
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('App listening on port: ' + port));

module.exports = app;
