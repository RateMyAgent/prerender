module.exports = {
    beforePhantomRequest: function(req, res, next) {
    	if(req.url === '/health') {
            req.url = '/http://digitalcastle.com.au';
            req.prerender.url = 'http://digitalcastle.com.au';
    	}

    	next();
    }
}