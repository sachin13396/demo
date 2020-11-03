"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShopComponent = void 0;
var core_1 = require("@angular/core");
var ShopComponent = /** @class */ (function () {
    function ShopComponent(apiService, msg) {
        this.apiService = apiService;
        this.msg = msg;
        this.items = [];
        this.cartQuantity = 0;
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.getEcommerceData();
    };
    ShopComponent.prototype.getEcommerceData = function () {
        var _this = this;
        this.apiService.getItems().subscribe(function (data) { return _this.items = data['data']; });
    };
    ShopComponent.prototype.addToCart = function (item) {
        this.cartQuantity += 1;
        this.productItem = this.cartQuantity;
        item = {
            product: item,
            quantity: this.cartQuantity
        };
        this.msg.sendMsg(item);
    };
    ShopComponent = __decorate([
        core_1.Component({
            selector: 'app-shop',
            templateUrl: './shop.component.html',
            styleUrls: ['./shop.component.css']
        })
    ], ShopComponent);
    return ShopComponent;
}());
exports.ShopComponent = ShopComponent;
