// Init DB
const Sequelize = require('sequelize');
const sequelize = new Sequelize('notepong', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const DROP_TABLES = true;

// Models
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
  },
  noteflightId: {
    type: Sequelize.STRING
  }
    
});

const Players = sequelize.define('players', {
  userId: {
    type: Sequelize.INTEGER,
  },
  points: {
    type: Sequelize.INTEGER
  },
  tournamentsWon: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
    
});

const Games = sequelize.define('games', {
  player1Id: {
    type: Sequelize.INTEGER,
  },
  player1Points: {
    type: Sequelize.INTEGER
  },
  player2Id: {
    type: Sequelize.INTEGER,
  },
  player2Points: {
    type: Sequelize.INTEGER
  },
  finished: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  tournamentId: {
    type: Sequelize.INTEGER,
    defaultValue: -1
  },
  roundId: {
    type: Sequelize.INTEGER,
    defaultValue: -1
  },
  nextGameId: {
    type: Sequelize.INTEGER,
    defaultValue: -1
  },
});


const Tournaments = sequelize.define('tournaments', {
  name: {
    type: Sequelize.STRING,
  },
});

const TournamentGames = sequelize.define('tournamentGames', {
  tournamentId: {
    type: Sequelize.INTEGER,
  },
  gameId: {
    type: Sequelize.INTEGER
  },
});

// SEEDS
// force: true will drop the table if it already exists
User.sync({force: DROP_TABLES}).then(() => {
  // Table created
  User.create({
    username: 'jordi',
    noteflightId: "1e6793ee7b3af10e1b0ce1898deda66f33ddecc9"
  });
  User.create({
    username: 'david',
    noteflightId: "1e6793ee7b3af10e1b0ce1898deda66f33ddecc9"
  });
  User.create({
    username: 'matt',
    noteflightId: "1e6793ee7b3af10e1b0ce1898deda66f33ddecc9"
  });
  User.create({
    username: 'rick',
    noteflightId: "1e6793ee7b3af10e1b0ce1898deda66f33ddecc9"
  });
});

Players.sync({force: DROP_TABLES}).then(() => {
});

Games.sync({force: DROP_TABLES}).then(() => {
});

Tournaments.sync({force: DROP_TABLES}).then(() => {
});

TournamentGames.sync({force: DROP_TABLES}).then(() => {
});

module.exports = {
  User: User
}

