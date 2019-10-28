var doc = document;
doc.id = function(id) {return document.getElementById(id);};
doc.class = function(cls) {return document.getElementsByClassName(cls);};
doc.tag = function(tag) {return document.getElementsByTagName(tag);};
doc.create = function(elm) {return document.createElement(elm);};
console.log("[EASY.JS] include: easy.js");
