/**
 * Package:    PatternMaker
 * Build:      2013-12-17
 * Version:    0.1.0
 */
(function($) {
    var RandomColor = function() {
        function RandomColor(palette) {
            this.setPalette(palette);
        }
        RandomColor.prototype.setPalette = function(palette) {
            this._palette = palette || [];
            this._lastColor = false;
            this._delivered = [];
        };
        RandomColor.prototype.getColor = function() {
            var color = false, maxIndex = this._palette.length;
            do {
                color = this._palette[Utils.getRandom(maxIndex)];
            } while (color === this._lastColor);
            this._updateDelivered(color);
            return color;
        };
        RandomColor.prototype.getStats = function() {
            console.log(this._delivered);
        };
        RandomColor.prototype._updateDelivered = function(color) {
            if (!(color in this._delivered)) {
                this._delivered[color] = 0;
            }
            this._lastColor = color;
            this._delivered[color]++;
        };
        return RandomColor;
    }();
    var Utils = {
        getRandom: function(max) {
            return Math.floor(Math.random() * max);
        }
    };
})(window.jQuery);