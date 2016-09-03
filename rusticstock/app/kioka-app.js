System.register(['@angular/platform-browser-dynamic', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var platform_browser_dynamic_1, core_1;
    var HomeComponent;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'kioka-app',
                        template: "\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"app/css/utils.css\">\n    <video autoplay loop muted poster=\"screenshot.png\" id=\"background\">\n        <source src=\"home_video.mov\" type=\"video/mp4\">\n    </video>\n    <div class=\"text\">\n      Soy un cambio muy misifus\n    </div>\n    ",
                        styles: ['position: inherit ;  width: 100% ; height: 100%']
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            platform_browser_dynamic_1.bootstrap(HomeComponent);
        }
    }
});
//# sourceMappingURL=kioka-app.js.map