"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('../app.component');
var home_module_1 = require('../../home/module/home.module');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var app_routes_1 = require('../routes/app.routes');
var about_module_1 = require('../../about/module/about.module');
var notFound_module_1 = require('../../not_found/module/notFound.module');
var photos_module_1 = require('../../photos/module/photos.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routes_1.routing,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                notFound_module_1.PageNotFoundModule,
                about_module_1.AboutModule,
                photos_module_1.PhotosModule,
                home_module_1.HomeModule,
                ng2_bs3_modal_1.Ng2Bs3ModalModule,
            ],
            providers: [app_routes_1.appRoutingProviders],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map