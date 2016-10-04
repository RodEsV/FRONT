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
var photos_component_1 = require('../photos.component');
var photos_routes_1 = require('../routes/photos.routes');
var gallery_component_1 = require('../gallery/gallery.component');
var image_component_1 = require('../images/image.component');
var common_1 = require('@angular/common');
var PhotosModule = (function () {
    function PhotosModule() {
    }
    PhotosModule = __decorate([
        core_1.NgModule({
            imports: [
                photos_routes_1.photosRouting,
                common_1.CommonModule
            ],
            declarations: [
                image_component_1.ImageComponent,
                photos_component_1.PhotosComponent,
                gallery_component_1.GalleryComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PhotosModule);
    return PhotosModule;
}());
exports.PhotosModule = PhotosModule;
//# sourceMappingURL=photos.module.js.map