const team = {
    _players: [
                {firstName: 'Luís', lastName: 'Fernandes', age: 30},
                {firstName: 'Rúben', lastName: 'Dias', age: 23},
                {firstName: 'Odisseas', lastName: 'Vlachodimos', age: 26},
            ],
            
    _games: [
                {opponent: 'FCP', teamPoints: 42, opponentPoints: 10},
                {opponent: 'Sporting', teamPoints: 42, opponentPoints: 20},
                {opponent: 'Braga', teamPoints: 42, opponentPoints: 32}
            ],
  
    get players () {
      return this._players;
    },
  
    get games () {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      player = {firstName, lastName, age};
      this._players.push(player); 
    },
  
    addGame(opponentName, teamPoinst, opponentPoints) {
      game = {opponentName, teamPoinst, opponentPoints};
      this._games.push(game);
    }
  
  }
  
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  
  console.log(team.players);
  
  team.addGame('Boavista',42,34);
  team.addGame('Nacional',42,10);
  team.addGame('Rio Ave',42,12);
  
  console.log(team.games);