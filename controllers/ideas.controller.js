const ideas = require("../models/ideas.module.js");


let id = 3; // last id of idea stored

//make controller to fetch all the ideas present in the system
exports.getAllIdeas = (req, res) => {
    // i have to read idea from ideal model
    res.status(200).send(ideas);
}

//fetch by id
exports.getIdeaBasedOnId = (req, res) => {

    const idea_id = req.params.id;

    if (ideas[idea_id]) {
        res.status(200).send(ideas[idea_id]);

    } else {
        console.log(`Idea with id : ${idea_id} is not present`);
        res.status(404).send({
            message: `Idea with id : ${idea_id} is not present`
        });
    }
}

//controller for create an ideas

exports.createIdea = (req,res) => {
    //logic
    id++;
    //read the request
    idea_object = req.body;
    //console.log(idea_object);
    
    idea_object["id"] = id;
    ideas[id] = idea_object;

    //response
    res.status(201).send(idea_object);
}

//controller for updatig the idea
exports.updateIdea = (req,res) => {
    //first read the idea
    const idea_id = req.params.id;

    //check if the idea exists or not
    if(ideas[idea_id]){
        const idea_obj = req.body;
        ideas[idea_id] = idea_obj;
        res.status(200).send( {
            message: `Idea is updated for id:   ${idea_id}`
        });
    }else{
        res.status(404).send({
            message: `Idea is dosent exist for the given request id ${idea_id}`
        });
    }

}

//controller for deleting the idea
exports.deleteIdea = (req,res) => {
    //first fetch the idea
    const idea_id = req.params.id;

    if(ideas[idea_id]){
        delete ideas[idea_id];
        res.status(200).send({
            message: ` idea with the id : ${idea_id} is deleted`
        });
    }else{
        res.status(404).send({
            message: `Idea is dosent exist for the given request id ${idea_id}`
        });
    }
}