exports.validate_POST_req_body = (req,res ,next) => {
    const req_obj = req.body;

    //validate if the idea_name field is present

    if(!req_obj ["id"]){
        return res.status(400).send({
            message : `Bad request body, "id" field not passed or is empty`
        })
    }

    //validate if the id in param and id in body matches
    if(req_obj["id"] != req.params.id){
        return res.status(400).send({
            message : `Bad request body, "id" siled in body ${req_obj["id"]} does not with id in param ${req.params.id}`
        })
    }

    //validate if the idea_name field is present

    if(!req_obj ["idea_name"]){
        return res.status(400).send({
            message : `Bad request body, "idea_name" field not passed or is empty`
        })
    }

    //valodation for author_name field

    if(!req_obj ["author_name"]){
        return res.status(400).send({
            message : `Bad request body, "author_name" field not passed or is empty`
        })
    }

    //valodation for idea_description field

    if(!req_obj ["idea_description"]){
        return res.status(400).send({
            message : `Bad request body, "idea_description" field not passed or is empty`
        })
    }
    next();
}

exports.validate_PUT_req_body = (req,res ,next) => {
    const req_obj = req.body;

    //validate if the idea_name field is present

    if(!req_obj ["id"]){
        return res.status(400).send({
            message : `Bad request body, "id" field not passed or is empty`
        })
    }

    //validate if the id in param and id in body matches
    if(req_obj["id"] != req.params.id){
        return res.status(400).send({
            message : `Bad request body, "id" siled in body ${req_obj["id"]} does not with id in param ${req.params.id}`
        })
    }

    //validate if the idea_name field is present

    if(!req_obj ["idea_name"]){
        return res.status(400).send({
            message : `Bad request body, "idea_name" field not passed or is empty`
        })
    }

    //valodation for author_name field

    if(!req_obj ["author_name"]){
        return res.status(400).send({
            message : `Bad request body, "author_name" field not passed or is empty`
        })
    }

    //valodation for idea_description field

    if(!req_obj ["idea_description"]){
        return res.status(400).send({
            message : `Bad request body, "idea_description" field not passed or is empty`
        })
    }
    next();
}