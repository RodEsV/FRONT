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
var login_component_1 = require('../login/login.component');
var home_component_1 = require('../home.component');
var menu_component_1 = require('../menu/menu.component');
var barsearch_component_1 = require('../barsearch/barsearch.component');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var forms_1 = require('@angular/forms');
var models_module_1 = require('../../models/models.module');
var platform_browser_1 = require('@angular/platform-browser');
var app_routes_1 = require('../../root/routes/app.routes');
var http_1 = require('@angular/http');
var info_component_1 = require('../information/info.component');
var login_directives_1 = require('../login/directives/login.directives');
var forms_2 = require('@angular/forms');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_2.ReactiveFormsModule,
                app_routes_1.routing,
                platform_browser_1.BrowserModule,
                models_module_1.ModelsModule,
                forms_1.FormsModule,
                ng2_bs3_modal_1.Ng2Bs3ModalModule,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                login_directives_1.LoginDirective,
                info_component_1.InfoComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                menu_component_1.MenuComponent,
                barsearch_component_1.BarsearchComponent
            ],
            exports: [home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map