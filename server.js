const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/62842913?s=460&u=f9eb84049477546225d57cadb178eeff668d0b01&v=4",
        name: "Rafael Barros",
        role: 'Alumni <a href="https://www.rocketseat.com.br" target="_blank">Rocketseat</a>',
        description: "Atualmente aprendendo HTML5, CSS, JavaScript e NodeJs.",
        links: [
            { name:"Github", url: "https://github.com/rafaelbarroslima" },
            { name:"Linkedin", url: "https://www.linkedin.com/in/rafael-lima-51212898" },
            { name:"Facebook", url: "https://web.facebook.com/rafael.barros.796569" }
        ]
    }
    return res.render('about', { about });
});

server.get('/portfolio', function(req, res) {
    return res.render('portfolio', { items: videos });
});

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function() {
    console.log('server is running...');
});