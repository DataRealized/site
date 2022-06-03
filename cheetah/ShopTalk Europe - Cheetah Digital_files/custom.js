(function ($) {
    $(document).ready(function () {
        var heightCalculationMethod = 'lowestElement';
        if (navigator.userAgent.indexOf("MSIE") > -1) {
            heightCalculationMethod = 'max';
        }
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ) {
            heightCalculationMethod = 'documentElementOffset';
        }
        $('#idiFrame').iFrameResize({
            autoResize: true,
            sizeHeight: true,
            heightCalculationMethod: heightCalculationMethod
        });

        if (document.getElementById("idiFrame") !== null && document.location.search) {
            document.getElementById("idiFrame").src = document.getElementById("idiFrame").src + document.location.search;
        }
        function OptanonWrapper() { }
    });
})(jQuery);