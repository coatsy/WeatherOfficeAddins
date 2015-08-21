angular.module('weatherFilters', [])
	.filter('direction', function () {
	    return function (input) {
	        var answer =
                input < 11.25 ? 'N' :
                input < 33.75 ? 'NNE' :
                input < 56.25 ? 'NE' :
                input < 78.75 ? 'ENE' :
                input < 101.25 ? 'E' :
                input < 123.75 ? 'ESE' :
                input < 146.25 ? 'SE' :
                input < 168.75 ? 'SSE' :
                input < 191.25 ? 'S' :
                input < 213.75 ? 'SSW' :
                input < 236.25 ? 'SW' :
                input < 258.75 ? 'WSW' :
                input < 281.25 ? 'W' :
                input < 303.75 ? 'WNW' :
                input < 326.25 ? 'NW' :
                input < 348.75 ? 'NNW' :
                'N';
	        return answer;
	    };
	})
 	.filter('directionArrow', function () {
 	    return function (input) {
 	        console.log('direction arrow for ' + input);
 	        var answer =
                input < 22.5 ? '\u2193' :
                input < 67.5 ? '\u2199' :
                input < 112.5 ? '\u2190' :
                input < 157.5 ? '\u2196' :
                input < 202.5 ? '\u2191' :
                input < 247.5 ? '\u2197' :
                input < 292.5 ? '\u2192' :
                input < 337.5 ? '\u2198' :
                '\u2193';
 	        console.log(answer);
 	        return answer;
 	    };
 	})
 	.filter('latitude', function () {
 	    return function (input) {
 	        var hemisphere =
 				input > 0 ? 'N' :
 				input < 0 ? 'S' :
 				'';
 	        var deg = input * (input < 0 ? -1 : 1);
 	        return deg.toString() + '\u00b0' + hemisphere;
 	    }
 	})
 	.filter('longitude', function () {
 	    return function (input) {
 	        var hemisphere =
 				input > 0 ? 'E' :
 				input < 0 ? 'W' :
 				'';
 	        var deg = input * (input < 0 ? -1 : 1);
 	        return deg.toString() + '\u00b0' + hemisphere;
 	    }
 	})
;
