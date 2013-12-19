/**
 * Package:    PatternMaker
 * Build:      2013-12-20
 * Version:    0.1.0
 */
(function($) {
    var Utils = {
        getRandom: function(max) {
            return Math.floor(Math.random() * max);
        },
        isNumber: function(obj) {
            return typeof obj === "number";
        }
    };
    var RandomColor = function() {
        function RandomColor(palette) {
            this.setPalette(palette);
        }
        RandomColor.prototype.setPalette = function(palette) {
            this._palette = palette || [];
            this._lastColor = false;
            this._delivered = {};
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
            return this._delivered;
        };
        RandomColor.prototype._updateDelivered = function(color) {
            if (!this._delivered.hasOwnProperty(color)) {
                this._delivered[color] = 0;
            }
            this._lastColor = color;
            this._delivered[color]++;
        };
        return RandomColor;
    }();
    var AreaCoordinates = function(exports) {
        function AreaCoordinates(x, y, w, h) {
            this.coords = {
                x: x,
                y: y,
                w: w,
                h: h
            };
        }
        console.log(exports);
        exports.AreaCoordinates = AreaCoordinates;
        AreaCoordinates.prototype.getCoordinates = function() {
            return this.coords;
        };
        AreaCoordinates.prototype.setCoordinates = function(coords) {
            this.coords = coords;
        };
        AreaCoordinates.prototype.getX = function() {
            return _getCoordinateValue("x", this.coords);
        };
        AreaCoordinates.prototype.getY = function() {
            return _getCoordinateValue("y", this.coords);
        };
        AreaCoordinates.prototype.getWidth = function() {
            return _getCoordinateValue("w", this.coords);
        };
        AreaCoordinates.prototype.getHeight = function() {
            return _getCoordinateValue("h", this.coords);
        };
        _getCoordinateValue = function(key, coords) {
            if (!coords.hasOwnProperty(key)) {
                return false;
            }
            if (!Utils.isNumber(coords[key])) {
                return false;
            }
            return coords[key];
        };
        return AreaCoordinates;
    }(this);
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
            this._canvas = new WebCanvas(this.element);
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