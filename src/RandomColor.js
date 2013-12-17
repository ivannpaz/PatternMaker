/**
 * Handles palette randomization.
 *
 * @return {object}
 */
var RandomColor = (function() {

    /**
     * Class Constructor.
     *
     * @param {array}   palette  Colors to randomize from.
     */
    function RandomColor(palette) {
        this.setPalette(palette);
    }

    /**
     * Set the current palette
     */
    RandomColor.prototype.setPalette = function(palette) {
        this._palette = palette || [];
        this._lastColor = false;
        this._delivered = [];
    };

    /**
     * Get a random color from the configured palette, without repeating the
     * previous one.
     *
     * @return {string}
     */
    RandomColor.prototype.getColor = function() {
        var color = false,
            maxIndex = this._palette.length;

        do {
            color = this._palette[Utils.getRandom(maxIndex)];
        } while(color === this._lastColor) ;

        this._updateDelivered(color);

        return color;
    };

    /**
     * DEBUG
     * @return {array}
     */
    RandomColor.prototype.getStats = function() {
        console.log(this._delivered);
    };

    /**
     * Keep track of each color delivered to the requestor incrementing its
     * per-color counter and last color drafted.
     *
     * @param  {string}     color
     */
    RandomColor.prototype._updateDelivered = function(color) {
        if (!(color in this._delivered)) {
            this._delivered[color] = 0;
        }

        this._lastColor = color;
        this._delivered[color]++;
    };

    return RandomColor;

})();
