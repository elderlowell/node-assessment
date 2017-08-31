var users = require('./userData.json');

module.exports = {
  getUsers: function(req, res) {
    var returnArray = [];

    if (req.query.age) {
      var age = req.query.age;
      for (var i = 0; i < users.length; i++) {
        if (users[i].age < age) {
          returnArray.push(users[i]);
        }
      }
      res.status(200).json(returnArray);
    }

    else if (req.query.lastname) {
      var lastName = req.query.lastname;
      for (var i = 0; i < users.length; i++) {
        if (users[i].last_name === lastName) {
          returnArray.push(users[i]);
        }
      }
      res.status(200).json(returnArray);
    }

    else if (req.query.email) {
      var email = req.query.email;
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          returnArray.push(users[i]);
        }
      }
      res.status(200).json(returnArray);
    }

    else if (req.query.favorites) {
      var favorites = req.query.favorites;
      for (var i = 0; i < users.length; i++) {
        for (var j = 0; j < users[i].favorites.length; j++) {
          if (users[i].favorites[j] === favorites) {
            returnArray.push(users[i]);
          }
        }
      }
      res.status(200).json(returnArray);
    }

    else {
      res.status(200).json(users);
    }
  }

  ,getUserById: function(req, res) {
    var id = JSON.parse(req.params.userId);
    var user = {};
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        user = users[i];
        res.status(200).json(user);
      }
    }
    res.status(404).json(null);
  }

  ,getAdmins: function(req, res) {
    var admins = [];
    for (var i = 0; i < users.length; i++) {
      if (users[i].type === 'admin') {
        admins.push(users[i]);
      }
    }
    res.status(200).json(admins);
  }

  ,getNonAdmins: function(req, res) {
    var nonAdmins = [];
    for (var i = 0; i < users.length; i++) {
      if (users[i].type !== 'admin') {
        nonAdmins.push(users[i]);
      }
    }
    res.status(200).json(nonAdmins);
  }

  ,getUsersOfType: function(req, res) {
    var userType = req.params.userType;
    var usersArray = [];
    for (var i = 0; i < users.length; i++) {
      if (users[i].type === userType) {
        usersArray.push(users[i]);
      }
    }
    res.status(200).json(usersArray);
  }

  ,updateUser: function(req, res) {
    var userId = JSON.parse(req.params.userId);
    var user = req.body;
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        users[i] = user;
      }
    }
    res.status(200).json(users);
  }

  ,createUser: function(req, res) {
    var newUser = req.body;
    var usersCount = users.length;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(200).json(users);
  }

  ,deleteUser: function(req, res) {
    var userId = JSON.parse(req.params.userId);
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === userId) {
        users.splice(i,1);
      }
    }
    res.status(200).json(users);
  }
}
