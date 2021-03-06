var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')

var db = mongojs('mongodb://admin:admin@ds141697.mlab.com:41697/mytasklist_abhi', ['tasks']);

//Get All Tasks
router.get('/tasks', function (req, res, next) {
    // res.send('TASK API');
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);

    });
});

//Get single task
router.get('/tasks/:id', function (req, res, next) {
    // res.send('TASK API');
    db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);

    });
});

//Save task
router.post('/task', function (req, res, next) {
    var task = req.body;

    if (!task.title || !(task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
})

//Delete 
router.delete('/tasks/:id', function (req, res, next) {
    // res.send('TASK API');
    db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);

    });
});

//update 
router.put('/tasks/:id', function (req, res, next) {

    var task = req.body;
    var updTask = {};
    if (task.isDone) {
        updTask.isDone = task.isDone;

    }

    if (task.title) {
        updTask.title = task.title;

    }

    if (!updTask) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {

        // res.send('TASK API');
        db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, updTask, {}, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);

        });
    }
});

module.exports = router;