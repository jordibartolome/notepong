  // create a bear (accessed at POST http://localhost:8080/api/bears)
module.exports = {
  create: (req, res) => {
		console.log("dins")
		console.log(req)
    var user = new modules.User();      // create a new instance of the Bear model
    user.username = req.body.username;  // set the bears name (comes from the request)

    // save the bear and check for errors
    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Bear created!' });
    });
  }
}