/**
 * Initialize Pattern builder plugin.
 */
;(function () {

    var pluginName = 'patternMaker',
        pluginDefaults = {
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
