/// <reference path="../App.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {

        // from http://www.chaosm.net/blog/2014/07/27/load-angularjs-after-office-initialized/
        //load angular app after office has been initialized 
        $.getScript('../filters.js', function () {
            $.getScript('../app.js', function () {
                $.getScript('../controller.js', function () {
                    //manually start angular application 
                    angular.bootstrap($('#content-main'), ['weatherApp']);
                });
            });
        });

        $(document).ready(function () {
            app.initialize();

            // $('#get-data-from-selection').click(getDataFromSelection);

        });
    };

    // Reads data from current document selection and displays a notification
    function getDataFromSelection() {
        Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
            function (result) {
                if (result.status === Office.AsyncResultStatus.Succeeded) {
                    app.showNotification('The selected text is:', '"' + result.value + '"');
                } else {
                    app.showNotification('Error:', result.error.message);
                }
            }
        );
    }
})();