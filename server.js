function startingNodeApp(app, port) {
    app.listen(port, function() {
        console.log(`App listening on port ${port}`);
    });
}

module.exports = startingNodeApp;