var notepong = new Vue({
  el: '#addUser',
  data: {
    username: '',
    userId: ''
  },

  methods: {
  	add: () => {
  		// console.log("addResult");
      $.ajax({
        method: "POST",
        url: "/users/create",
        data: { username: "John", userId: "123234" }
      })
        .done(function( msg ) {
          alert( "Data Saved: " + msg );
        });
  	},
  }
})