const express = require('express')
const route = express.Router();
const idea_controller = require('../controllers/ideas.controller.js');

//start defining routes

//routes for fetch all - port no
route.get("/ideas", idea_controller.getAllIdeas);

//route for fetching based on id
route.get("/ideas/:id", idea_controller.getIdeaBasedOnId);

//route for creating new idea
route.post("/ideas", idea_controller.createIdea);

//route for updating the idea
route.put("/ideas/:id", idea_controller.updateIdea);

//route for deleting the idea 
route.delete("/ideas/:id", idea_controller.deleteIdea)

module.exports = route;