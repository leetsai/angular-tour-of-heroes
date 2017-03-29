"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeroDetailComoponent = (function () {
    // always export the component class because we'll always import it elsewhere
    function HeroDetailComoponent() {
    }
    return HeroDetailComoponent;
}());
HeroDetailComoponent = __decorate([
    core_1.Component({
        selector: 'hero-detail',
        template:  * ngIf, "hero":  >
            {}
    }, { hero: .name }, details < /h2>
        < div > id, /label>{{hero.id}}</div >
        name, /label>
        < input[(ngModel)], "hero.name", placeholder = "name" >
        /div>
        < /div>)
    // always export the component class because we'll always import it elsewhere
], HeroDetailComoponent);
exports.HeroDetailComoponent = HeroDetailComoponent;
//# sourceMappingURL=hero-detail.component.js.map