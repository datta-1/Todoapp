const testingController = (req,res) => {
    res.status(200).send('Testing route is working!');
}

module.exports = {testingController};