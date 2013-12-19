/**
 * Shared utilities and convenience methods
 *
 * @type {Object}
 */
var Utils = {

    /**
     * Get a random number from 0 to max items in palette.
     *
     * @param {int} max     Upper limit.
     *
     * @return {int}
     */
    getRandom: function(max) {
        return Math.floor(Math.random() * max);
    },

    /**
     * Check if a given parameter is actually a number type.
     *
     * @param  {any}  obj
     * @return {Boolean}
     */
    isNumber: function(obj) {
        return typeof obj === 'number';
    }

};
