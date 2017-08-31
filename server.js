const express = require('express');
const bodyParser = require('body-parser');
const usersCtrl = require('./usersCtrl.js');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/users', usersCtrl.getUsers);
app.get('/api/users/:userId', usersCtrl.getUserById);
app.get('/api/admins', usersCtrl.getAdmins);
app.get('/api/nonadmins', usersCtrl.getNonAdmins);
app.get('/api/user_type/:userType', usersCtrl.getUsersOfType);

app.put('/api/users/:userId', usersCtrl.updateUser);
app.post('/api/users', usersCtrl.createUser);
app.delete('/api/users/:userId', usersCtrl.deleteUser);

app.listen(port, function() {
  console.log(`Node listening on port ${port}...`);
});
