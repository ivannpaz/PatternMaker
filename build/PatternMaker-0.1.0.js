/**
 * Package:    PatternMaker
 * Build:      2013-12-17
 * Version:    0.1.0
 */
var RandomColor = function() {
    function Plugin(palette) {
        this.setPalette(palette);
    }
    Plugin.prototype.setPalette = function(palette) {
        this._palette = palette || [];
        this._lastColor = false;
        this._delivered = [];
    };
    Plugin.prototype.getColor = function() {
        var color = false;
        do {
            color = this._palette[this._getRandom()];
        } while (color === this._lastColor);
        this._updateDelivered(color);
        return color;
    };
    Plugin.prototype.getStats = function() {
        console.log(this._delivered);
    };
    Plugin.prototype._getRandom = function() {
        return Math.floor(Math.random() * this._palette.length);
    };
    Plugin.prototype._updateDelivered = function(color) {
        if (!(color in this._delivered)) {
            this._delivered[color] = 0;
        }
        this._lastColor = color;
        this._delivered[color]++;
    };
    return Plugin;
}();

var Restaurant = function() {
    var name, secretSkills = {
        pizza: function() {
            return "new Pizza()";
        },
        sushi: function() {
            return "new Sushi()";
        }
    };
    function Restaurant(_name) {
        name = _name;
    }
    Restaurant.prototype.getName = function() {
        return name;
    };
    Restaurant.prototype.getFood = function(name) {
        return name in secretSkills ? secretSkills[name]() : null;
    };
    return Restaurant;
}();