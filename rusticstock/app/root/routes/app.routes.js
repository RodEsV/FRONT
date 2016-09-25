"use strict";
var router_1 = require('@angular/router');
var notFound_component_1 = require('../../not_found/notFound.component');
var home_component_1 = require('../../home/home.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: '**', component: notFound_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map