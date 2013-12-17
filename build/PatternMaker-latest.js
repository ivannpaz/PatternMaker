/**
 * Package:    PatternMaker
 * Build:      2013-12-18
 * Version:    0.1.0
 */
(function($) {
    var Utils = {
        getRandom: function(max) {
            return Math.floor(Math.random() * max);
        }
    };
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
    (function($) {
        var pluginName = "patternMaker", pluginDefaults = {
            palette: []
        };
        function Plugin(element, options) {
            this.element = element;
            this.$element = $(element);
            this.options = $.extend({}, pluginDefaults, options);
            this.init();
        }
        Plugin.prototype.init = function() {
            this._palette = new RandomColor(this.options.palette);
        };
        $.fn[pluginName] = function(options) {
            return this.each(function() {
                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName);
                    new Plugin(this, options);
                }
            });
        };
    })(jQuery);
})(window.jQuery);