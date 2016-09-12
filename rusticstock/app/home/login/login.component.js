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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var user_component_1 = require('../../models/user.component');
var LoginComponent = (function () {
    function LoginComponent() {
        this.model = new user_component_1.UserComponent("rod", "123");
        this.active = true;
    }
    LoginComponent.prototype.open = function () {
        this.modal.open();
    };
    LoginComponent.prototype.getInfo = function () {
        var _this = this;
        this.model = new user_component_1.UserComponent("", "");
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], LoginComponent.prototype, "modal", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-comp',
            templateUrl: 'app/home/login/login.html',
            styleUrls: ['app/home/login/login.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map