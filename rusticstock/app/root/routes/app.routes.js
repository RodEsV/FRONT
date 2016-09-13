"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../../home/home.component');
var about_component_1 = require('../../about/about.component');
var routes = [
    { path: 'aboutus', component: about_component_1.AboutComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map