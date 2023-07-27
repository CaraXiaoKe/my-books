"use strict";
var Person = (function () {
    function Person(parameters) {
        this.__name = 1;
        console.log(parameters);
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this.__name;
        },
        set: function (arg) {
            this.__name = arg;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getName = function () {
    };
    return Person;
}());
