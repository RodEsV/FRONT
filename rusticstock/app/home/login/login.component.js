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
var login_service_1 = require('./services/login.service');
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.modelLogin = new user_component_1.UserComponent("", "", "", "");
        this.modelSignUp = new user_component_1.UserComponent("", "", "", "");
        this.active = true;
        this.mode = 'Observable';
        this.submitted = true;
        this.name = "default";
        this.urlSuccess = "/";
    }
    LoginComponent.prototype.open = function () {
        this.modal.open();
    };
    LoginComponent.prototype.loginUser = function (email, password) {
        var _this = this;
        console.log(email, password);
        if (!email || !password) {
            return;
        }
        this.loginService.loginUser(email, password)
            .subscribe(function (error) { return _this.errorMessage = error; });
        console.log("status" + this.loginService.status);
        this.modelLogin = new user_component_1.UserComponent("", "", "", "");
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    LoginComponent.prototype.signUpUser = function (userName, email, password, confirmPass) {
        var _this = this;
        console.log(this.name, email, password, confirmPass, userName);
        if (!email || !password || !confirmPass) {
            return;
        }
        this.loginService.signUpUser(this.name, userName, email, password, confirmPass, this.urlSuccess)
            .subscribe(function (error) { return _this.errorMessage = error; });
        this.modelSignUp = new user_component_1.UserComponent("", "", "", "");
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    __decorate([
        core_1.ViewChild('modal'),
        core_1.ViewChild('modalError'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], LoginComponent.prototype, "modal", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-comp',
            templateUrl: 'login.html',
            styleUrls: ['login.css'],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map