var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Post = mongoose.model('Post');
let jwt = require('express-jwt');

let auth = jwt({secret: process.env.BACKEND_SECRET, userProperty: 'payload'});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/API/posts/', function(req, res, next) {
  Post.find(function(err, posts) {
    if (err) { return next(err); }
    res.json(posts);
  });
});

  router.post('/API/posts/',auth, function (req, res, next) {
    let post = new Post(req.body);
  post.save(function(err, rec) {
      if (err){ return next(err); }
      res.json(rec);
    });
  });  
  

  router.get('/API/posts/:id', function(req, res, next) {
    Post.findById(req.params.id, function(err, post) {
      if (err) return next(err);
      if (!post) 
        return next(new Error('not found ' + req.params.id));
      res.json(post);
    });
  
    
  });  

  router.route('/API/posts/:post_id').put(function (req, res) {
    
        Post.findById(req.params.post_id, function (err, post) {
            if (err) {
                res.send(err);
            }
            post.title = req.body.title;
            post.description = req.body.description;
            post.comments = req.body.comments;
            post.photourl = req.body.photourl;
            post.poster =req.body.poste;
            post.likes = req.body.likes;

            post.save(function (err) {
                if (err)
                    res.send(err);
    
                res.json({ message: 'Post updated!' });
            });
    
        });
    });
    router.param('post', function(req, res, next, id) {
      let query = Post.findById(id);
      query.exec(function (err, post){
        if (err) { return next(err); }
        if (!post) { return next(new Error('not found ' + id)); }
        req.post = post;
        return next();
      });
    });  

    router.post('/API/posts/:post/comments', function(req, res, next) {
      let ing = new Post(req.body);
  
      ing.save(function(err, post) {
        if (err) return next(err);
  
        req.post.comments.push(post);
        req.post.save(function(err, rec) {
          if (err) return next(err);
          res.json(post);
        })
      });
    });



module.exports = router;
