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
    function Plugin(palette) {
        this.setPalette(palette);
    }

    /**
     * Set the current palette
     */
    Plugin.prototype.setPalette = function(palette) {
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
    Plugin.prototype.getColor = function() {
        var color = false;

        do {
            color = this._palette[this._getRandom(this._palette.length)];
        } while(color === this._lastColor) ;

        this._updateDelivered(color);

        return color;
    };

    /**
     * DEBUG
     * @return {array}
     */
    Plugin.prototype.getStats = function() {
        console.log(this._delivered);
    };

    /**
     * Keep track of each color delivered to the requestor incrementing its
     * per-color counter and last color drafted.
     *
     * @param  {string}     color
     */
    Plugin.prototype._updateDelivered = function(color) {
        if (!(color in this._delivered)) {
            this._delivered[color] = 0;
        }

        this._lastColor = color;
        this._delivered[color]++;
    };

    /**
     * Get a random number from 0 to max items in palette.
     *
     * @param {int} max     Upper limit.
     *
     * @return {int}
     */
    function _getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return Plugin;

})();
