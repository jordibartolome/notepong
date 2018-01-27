var notepong = new Vue({
  el: '#notepong',
  data: {
    message: 'Hello Vue!',
    stats: [
    	{
    		user: {
    			username: "jordi"
    		},
    		points: 12
    	}
    ],

   	tournaments: [
	   	{
	   		name: "prova tournament"
	   	}
   	],

   	lastGames: [
   		{
   			text: "jordi vs rick"
   		}
   	]
  },

 methods: {
		addResult: () => {
			console.log("addResult");
		},
		createTournament: () => {
			console.log("createTournament");
		},
		addPlayer: () => {
			console.log("addPlayer");
		},
	}
})