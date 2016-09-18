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
var router_1 = require('@angular/router');
var InfoComponent = (function () {
    function InfoComponent(router) {
        this.router = router;
    }
    InfoComponent.prototype.onSelect = function (page) {
        if (page == 'about') {
            this.router.navigate(['/about']);
        }
        else if (page == 'contact') {
            this.router.navigate(['/contact']);
        }
    };
    InfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'info-comp',
            templateUrl: 'info.html',
            styleUrls: ['info.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], InfoComponent);
    return InfoComponent;
}());
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=info.component.js.map