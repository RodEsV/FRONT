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
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var login_service_1 = require('./services/login.service');
var LoginComponent = (function () {
    function LoginComponent(loginService, fb) {
        this.loginService = loginService;
        this.fb = fb;
        this.active = true;
        this.submitted = true;
        this.responseLogout = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: [""],
            password: [""]
        });
        this.signUpForm = this.fb.group({
            name: [""],
            nickname: [""],
            email: [""],
            password: [""],
            password_confirmation: [""]
        });
    };
    LoginComponent.prototype.open = function () {
        this.modal.open();
    };
    LoginComponent.prototype.close = function () {
        if (this.responseLogIn || this.responseSignUp) {
            this.modal.close();
            console.log("checking!!");
        }
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var auxVar;
        this.loginService.loginUser(JSON.stringify(this.loginForm.value))
            .subscribe(function (response) { _this.responseLogIn = response; var auxVar = response; }, function (error) { return _this.errorMessage = error; });
        console.log(auxVar);
        this.resultResponse = auxVar;
    };
    LoginComponent.prototype.logOutUser = function () {
        var infoJSON = this.resultResponse.json().data;
        this.loginService.logOutUser(infoJSON.auth_token, infoJSON.data.email, this.responseLogIn.headers['Client']);
    };
    LoginComponent.prototype.signUpUser = function () {
        var _this = this;
        if (this.signUpForm.controls['name'].value == "") {
            this.signUpForm.controls['name'].setValue("default");
        }
        if (this.signUpForm.controls['nickname'].value == "") {
            this.signUpForm.controls['nickname'].setValue("default");
        }
        this.loginService.signUpUser(JSON.stringify(this.signUpForm.value))
            .subscribe(function (response) { return _this.responseSignUp = response; }, function (error) { return _this.errorMessage = error; });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    __decorate([
        core_1.ViewChild('modal'), 
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
        __metadata('design:paramtypes', [login_service_1.LoginService, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map