var ideaModel = require('../models/ideaModel.js');

/**
 * ideaController.js
 *
 * @description :: Server-side logic for managing ideas.
 */
module.exports = {

    /**
     * ideaController.list()
     */
    list: function (req, res) {
        ideaModel.find(function (err, ideas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting idea.',
                    error: err
                });
            }
            return res.json(ideas);
        });
    },

    /**
     * ideaController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ideaModel.findOne({_id: id}, function (err, idea) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting idea.',
                    error: err
                });
            }
            if (!idea) {
                return res.status(404).json({
                    message: 'No such idea'
                });
            }
            return res.json(idea);
        });
    },

    /**
     * ideaController.create()
     */
    create: function (req, res) {
        var idea = new ideaModel({
			title : req.body.title,
			details : req.body.details,
			user : req.body.user,
			date : req.body.date

        });

        idea.save(function (err, idea) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating idea',
                    error: err
                });
            }
            return res.status(201).json(idea);
        });
    },

    /**
     * ideaController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ideaModel.findOne({_id: id}, function (err, idea) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting idea',
                    error: err
                });
            }
            if (!idea) {
                return res.status(404).json({
                    message: 'No such idea'
                });
            }

            idea.title = req.body.title ? req.body.title : idea.title;
			idea.details = req.body.details ? req.body.details : idea.details;
			idea.user = req.body.user ? req.body.user : idea.user;
			idea.date = req.body.date ? req.body.date : idea.date;
			
            idea.save(function (err, idea) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating idea.',
                        error: err
                    });
                }

                return res.json(idea);
            });
        });
    },

    /**
     * ideaController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ideaModel.findByIdAndRemove(id, function (err, idea) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the idea.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
