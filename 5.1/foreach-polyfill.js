if (typeof NodeList.prototype.forEach === "undefined") {
    console.log("creating NodeList.forEach");
    
    NodeList.prototype.forEach = function(callback) {
        [].forEach.call(this, callback);
    };
}