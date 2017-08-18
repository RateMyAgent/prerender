#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    workers: 4,
    softIterations: 30
});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.basicAuth());
// server.use(prerender.whitelist());
//server.use(prerender.blacklist());
//server.use(prerender.logger());
server.use(prerender.removeScriptTags());
server.use(require('./lib/plugins/health-check'));
server.use(prerender.httpHeaders());
// server.use(prerender.inMemoryHtmlCache());
server.use(prerender.s3HtmlCache());

server.start();
