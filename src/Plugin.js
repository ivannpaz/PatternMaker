/**
 * Initialize Pattern builder plugin.
 */
;(function () {

    var pluginName = 'patternMaker',
        pluginDefaults = {
            background      : '#FFFFFF',
            frameSize       : false,
            frameColor      : false,
            columnWidth     : 5,        //If false, it will be calculated with columns
            columns         : false,    //Only used if columnWidth is false
            maxBlocks       : 3,
            minBlockSize    : 30,
            canvasContent   : false,
            palette: []
        };

    /**
     * Constructor.
     *
     * @param {dom}     element     Drawing board
     * @param {object}  options     Plugin options
     */
    function Plugin(element, options)
    {
        this.element = element;
        this.$element = $(element);
        this.options = $.extend({}, pluginDefaults, options);
        this.init();
    }

    /**
     * Launch it
     */
    Plugin.prototype.init = function()
    {
        this._palette = new RandomColor(this.options.palette);
        this._canvas = new fabric.StaticCanvas(this.element);

        var frameArea = new AreaCoordinates(22, 33, 44, 55);
        var drawArea = new AreaCoordinates(66, 77, 88, 99);

        console.log(frameArea.getAll());
        console.log(drawArea.getAll());
    };

    /**
     * Attach to jQuery plugin namespace.
     *
     * @param  {object}     options     Initialization options
     */
    jQuery.fn[pluginName] = function(options) {
        return this.each(function () {
            if (!jQuery.data(this, "plugin_" + pluginName)) {
                jQuery.data(this, "plugin_" + pluginName);
                new Plugin(this, options);
            }
        });
    };

})();
