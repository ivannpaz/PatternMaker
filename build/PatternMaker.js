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
    var AreaCoordinates = function() {
        function AreaCoordinates(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        AreaCoordinates.prototype.getAll = function() {
            return [ this.x, this.y, this.w, this.h ];
        };
        return AreaCoordinates;
    }();
    var DrawingFrame = function() {
        function DrawingFrame(param) {
            this.param = param;
        }
        return DrawingFrame;
    }();
    (function() {
        var pluginName = "patternMaker", pluginDefaults = {
            background: "#FFFFFF",
            frameSize: false,
            frameColor: false,
            columnWidth: 5,
            columns: false,
            maxBlocks: 3,
            minBlockSize: 30,
            canvasContent: false,
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
            this._canvas = new fabric.StaticCanvas(this.element);
            var frameArea = new AreaCoordinates(22, 33, 44, 55);
            var drawArea = new AreaCoordinates(66, 77, 88, 99);
            console.log(frameArea.getAll());
            console.log(drawArea.getAll());
        };
        jQuery.fn[pluginName] = function(options) {
            return this.each(function() {
                if (!jQuery.data(this, "plugin_" + pluginName)) {
                    jQuery.data(this, "plugin_" + pluginName);
                    new Plugin(this, options);
                }
            });
        };
    })();
})(window.jQuery);