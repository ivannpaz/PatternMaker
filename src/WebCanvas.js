/**
 * Handles canvas operations thru fabric
 *
 * @return {object}
 */
var WebCanvas = (function() {

    /**
     * Class Constructor.
     */
    function WebCanvas(element) {
        this._canvas = new fabric.StaticCanvas(element);
    }

    /**
     * Initialization
     */
    WebCanvas.prototype.init = function() {
    };

    return WebCanvas;

})();
