// THIS IS THE ROUTE INDEX
// This file doesn't know these things so I need to import them
const express = require(`express`);
const router = express.Router();

// Getting the router
router.get(`/`, (request, response) => {
    response.render(`template`, {
        locals: {
            title: `Hello Express template world!`,
        },
        partials: {
            partial: `partial-index`
        }
    })

});

// In order to import something, you need to first EXPORT it
module.exports = router