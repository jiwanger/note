"use strict";

$(function() {

    new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("First");
            resolve();
        }, 1000);
    }).then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("Second");
                resolve();
            }, 4000);
        });
    }).then(function () {
        setTimeout(function () {
            console.log("Third");
        }, 3000);
    });
})

var jiwanger = {
    name : "Jiwanger",
    age: 31,
    info: function() {
        return "Name is " + this.name + ", Age is " + this.age + "."
    }
};