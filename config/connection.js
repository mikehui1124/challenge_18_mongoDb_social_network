const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialNetworkCRUD', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
