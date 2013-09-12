var httpProxy = require('http-proxy');
var router = new httpProxy.RoutingProxy();

/*
 * GET home page.
 */

exports.index = function(req, res){
    res.cookie('foo', 'bar');
    res.cookie('bar', 'baz');

    router.proxyRequest(req, res, {
        host: 'www.yellowpages.com',
        port: 80,
        enable: { xforward: false }
    });
};
