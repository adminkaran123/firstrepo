var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://karan:karan@ds125126.mlab.com:25126/protfolio',['projects']); 
//Get Projects
router.get('/',function(req,res,next){
    db.projects.find(function(err,projects){
        if(err){
            res.send(err);

        }
        else{
            res.json(projects);
        }

    });
});

//Get One Project
router.get('/:id',function(req,res,next){
    db.projects.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,projects){
        if(err){
            res.send(err);

        }
        else{
            res.json(projects);
        }

    });
});

//Save Project
router.post('/', function(req, res, next){
    var project = req.body;
    if(!project.name ||!project.image || !project.categeory || !project.link){
      res.status(404);
      res.json({
        "error":"invalid Data"
      });
    }else{
      db.projects.save(project, function(err, result){
        if(err){
          res.send(err);
  
        }else{
          res.json(result);
        }
      });
    }
  });
  //update todo
  router.put('/:id', function(req, res, next){
    var project = req.body;
    var updObj = {};
    if(project.name){
      updObj.name = project.name
    }
    if(project.image){
      updObj.image = project.image;
    }
    if(project.link){
      updObj.link = project.link;
    }
    if(project.desc){
      updObj.desc = project.desc;
    }
    if(project.categeory){
      updObj.categeory = project.categeory;
    }
  
    if(!updObj){
      res.status(404);
      res.json({
        "error":"invalid Data"
      });
    }else{
      db.projects.update({
      _id: mongojs.ObjectId(req.params.id)
  
    }, updObj,{},function(err, result){
      if(err){
        res.send(err);
      }else{
        res.json(result);
      }
    });
    }
  });
  //Delete todo
  router.delete('/:id', function(req, res, next){
    db.projects.remove({
      _id: mongojs.ObjectId(req.params.id)
    },'',function(err, result){
      if(err){
        res.send(err);
      }else{
        res.json(result);
      }
    });
  });

module.exports = router;