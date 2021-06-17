// This file doesn't know these things so I need to import them
const express = require(`express`);
const router = express.Router();

// Getting the router
router.get(`/`, (request, response) => {
    response.render(`template`, {
        locals: {
            title: `Meow!`,
            message: `cats are evil!`
        },
        partials: {
            partial: `partial-cat-dogs`
        }
    })

});

// In order to import something, you need to first EXPORT it
module.exports = router