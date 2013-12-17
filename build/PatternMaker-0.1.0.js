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
            color = this._palette[this._getRandom(this._palette.length)];
        } while (color === this._lastColor);
        this._updateDelivered(color);
        return color;
    };
    Plugin.prototype.getStats = function() {
        console.log(this._delivered);
    };
    Plugin.prototype._updateDelivered = function(color) {
        if (!(color in this._delivered)) {
            this._delivered[color] = 0;
        }
        this._lastColor = color;
        this._delivered[color]++;
    };
    function _getRandom(max) {
        return Math.floor(Math.random() * max);
    }
    return Plugin;
}();