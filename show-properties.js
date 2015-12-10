/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var friendsService_1 = require('./services/friendsService');
var DisplayComponent = (function () {
    function DisplayComponent(friendsService) {
        this.name = "Alice";
        this.names = friendsService.names;
    }
    DisplayComponent.prototype.addNewName = function (name) {
        this.names.push(name);
    };
    DisplayComponent.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addNewName($event.target.value);
            $event.target.value = null;
        }
    };
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display',
            injectables: [friendsService_1.FriendsService]
        }),
        angular2_1.View({
            template: "\n        <p>My name: {{ name }}</p>\n        <p>Friends: </p>\n        <ul>\n            <li *for=\"#name of names\">\n                {{ name }}\n            </li>\n        </ul>\n        <p *if=\"names.length > 3\">You have many friends!</p>\n        \n        <input #newname (keyup)=\"doneTyping($event)\">\n        <button (click)=\"addNewName(newname.value)\">Add Friend</button>\n\n    ",
            directives: [angular2_1.For, angular2_1.If]
        }), 
        __metadata('design:paramtypes', [friendsService_1.FriendsService])
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);
