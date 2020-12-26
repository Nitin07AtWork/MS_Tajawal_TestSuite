$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GETHotelsByLocation.feature");
formatter.feature({
  "line": 1,
  "name": "GETHotelsByLocation - This feature file validates the details of hotel which are fetched based on location passed as the query parameter",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "1) Verify hotel details are fetched for location - \u003cquery\u003e",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;1)-verify-hotel-details-are-fetched-for-location---\u003cquery\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I pass queryParameters",
  "rows": [
    {
      "cells": [
        "query",
        "\u003clocation\u003e"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I perform GET operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should get \"\u003cstatus\u003e\" response",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "hotels"
      ],
      "line": 14
    },
    {
      "cells": [
        "hotelId"
      ],
      "line": 15
    },
    {
      "cells": [
        "name"
      ],
      "line": 16
    },
    {
      "cells": [
        "city"
      ],
      "line": 17
    },
    {
      "cells": [
        "country"
      ],
      "line": 18
    },
    {
      "cells": [
        "thumbnail_url"
      ],
      "line": 19
    },
    {
      "cells": [
        "displayType"
      ],
      "line": 20
    },
    {
      "cells": [
        "latitude"
      ],
      "line": 21
    },
    {
      "cells": [
        "longitude"
      ],
      "line": 22
    },
    {
      "cells": [
        "isActive"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;1)-verify-hotel-details-are-fetched-for-location---\u003cquery\u003e;",
  "rows": [
    {
      "cells": [
        "status",
        "resourceName",
        "location"
      ],
      "line": 26,
      "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;1)-verify-hotel-details-are-fetched-for-location---\u003cquery\u003e;;1"
    },
    {
      "cells": [
        "200",
        "getHotelsByLocation",
        "paris"
      ],
      "line": 27,
      "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;1)-verify-hotel-details-are-fetched-for-location---\u003cquery\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3013765701,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "1) Verify hotel details are fetched for location - \u003cquery\u003e",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;1)-verify-hotel-details-are-fetched-for-location---\u003cquery\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I pass queryParameters",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "query",
        "paris"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I perform GET operation \"getHotelsByLocation\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "hotels"
      ],
      "line": 14
    },
    {
      "cells": [
        "hotelId"
      ],
      "line": 15
    },
    {
      "cells": [
        "name"
      ],
      "line": 16
    },
    {
      "cells": [
        "city"
      ],
      "line": 17
    },
    {
      "cells": [
        "country"
      ],
      "line": 18
    },
    {
      "cells": [
        "thumbnail_url"
      ],
      "line": 19
    },
    {
      "cells": [
        "displayType"
      ],
      "line": 20
    },
    {
      "cells": [
        "latitude"
      ],
      "line": 21
    },
    {
      "cells": [
        "longitude"
      ],
      "line": 22
    },
    {
      "cells": [
        "isActive"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 2856067400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 1424033100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "duration": 47379300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getHotelsByLocation",
      "offset": 25
    }
  ],
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "duration": 4873205200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 114348400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 30717901,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 15440500,
  "status": "passed"
});
formatter.after({
  "duration": 477001,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "2) Verify error code and description for negative values - \u003cscenario\u003e",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Unique-Reference-Code",
        ""
      ],
      "line": 33
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I pass queryParameters",
  "rows": [
    {
      "cells": [
        "\u003cparam\u003e",
        "\u003clocationValue\u003e"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I perform GET operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get \"\u003cstatus\u003e\" response",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "\u003cerrorcode\u003e"
      ],
      "line": 41
    },
    {
      "cells": [
        "\u003cerrordesc\u003e"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 44,
      "value": "#statuscode mentioned as 200 for the scenarios where it should fail but is actually 200 OK given by the system"
    }
  ],
  "line": 46,
  "name": "",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;",
  "rows": [
    {
      "cells": [
        "scenario",
        "status",
        "resourceName",
        "locationValue",
        "errorCode",
        "errordesc",
        "param"
      ],
      "line": 47,
      "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;1"
    },
    {
      "cells": [
        "invalid location value-special chars",
        "200",
        "getHotelsByLocation",
        "$\u0026+_\u003e\u003c",
        "",
        "",
        "query"
      ],
      "line": 48,
      "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;2"
    },
    {
      "cells": [
        "invalid location value-location doesn\u0027t exist",
        "200",
        "getHotelsByLocation",
        "zxdfkl",
        "",
        "",
        "query"
      ],
      "line": 49,
      "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;3"
    },
    {
      "cells": [
        "passing empty value",
        "200",
        "getHotelsByLocation",
        "",
        "",
        "",
        "query"
      ],
      "line": 50,
      "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;4"
    },
    {
      "cells": [
        "passing invalid value",
        "200",
        "getHotelsByLocation",
        "paris",
        "",
        "",
        "q"
      ],
      "line": 51,
      "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;5"
    },
    {
      "cells": [
        "passing empty query param",
        "200",
        "getHotelsByLocation",
        "paris",
        "",
        "",
        ""
      ],
      "line": 52,
      "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;6"
    },
    {
      "cells": [
        "passing empty query param  and value",
        "200",
        "getHotelsByLocation",
        "paris",
        "",
        "",
        ""
      ],
      "line": 53,
      "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6958801,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "2) Verify error code and description for negative values - invalid location value-special chars",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Unique-Reference-Code",
        ""
      ],
      "line": 33
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I pass queryParameters",
  "matchedColumns": [
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "query",
        "$\u0026+_\u003e\u003c"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I perform GET operation \"getHotelsByLocation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "response Body contains",
  "matchedColumns": [
    5
  ],
  "rows": [
    {
      "cells": [
        "\u003cerrorcode\u003e"
      ],
      "line": 41
    },
    {
      "cells": [
        ""
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 1286300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 17695799,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "duration": 441801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getHotelsByLocation",
      "offset": 25
    }
  ],
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "duration": 1932253500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 1961700,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 1311000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 1368701,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.tajawal.stepdefs.CommonSteps.verifyResponseBodyValues(CommonSteps.java:390)\r\n\tat ✽.And response Body contains(GETHotelsByLocation.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 959599,
  "status": "passed"
});
formatter.before({
  "duration": 13593700,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "2) Verify error code and description for negative values - invalid location value-location doesn\u0027t exist",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Unique-Reference-Code",
        ""
      ],
      "line": 33
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I pass queryParameters",
  "matchedColumns": [
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "query",
        "zxdfkl"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I perform GET operation \"getHotelsByLocation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "response Body contains",
  "matchedColumns": [
    5
  ],
  "rows": [
    {
      "cells": [
        "\u003cerrorcode\u003e"
      ],
      "line": 41
    },
    {
      "cells": [
        ""
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 1873499,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 9912400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "duration": 388300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getHotelsByLocation",
      "offset": 25
    }
  ],
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "duration": 1670089701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 1521101,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 1378500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 526801,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.tajawal.stepdefs.CommonSteps.verifyResponseBodyValues(CommonSteps.java:390)\r\n\tat ✽.And response Body contains(GETHotelsByLocation.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 196900,
  "status": "passed"
});
formatter.before({
  "duration": 4660300,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "2) Verify error code and description for negative values - passing empty value",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Unique-Reference-Code",
        ""
      ],
      "line": 33
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I pass queryParameters",
  "matchedColumns": [
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "query",
        ""
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I perform GET operation \"getHotelsByLocation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "response Body contains",
  "matchedColumns": [
    5
  ],
  "rows": [
    {
      "cells": [
        "\u003cerrorcode\u003e"
      ],
      "line": 41
    },
    {
      "cells": [
        ""
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 745400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 1578900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "duration": 329301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getHotelsByLocation",
      "offset": 25
    }
  ],
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "duration": 1054356000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 1244300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 1340900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 993600,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.tajawal.stepdefs.CommonSteps.verifyResponseBodyValues(CommonSteps.java:390)\r\n\tat ✽.And response Body contains(GETHotelsByLocation.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 260200,
  "status": "passed"
});
formatter.before({
  "duration": 8134900,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "2) Verify error code and description for negative values - passing invalid value",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Unique-Reference-Code",
        ""
      ],
      "line": 33
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I pass queryParameters",
  "matchedColumns": [
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "q",
        "paris"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I perform GET operation \"getHotelsByLocation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "response Body contains",
  "matchedColumns": [
    5
  ],
  "rows": [
    {
      "cells": [
        "\u003cerrorcode\u003e"
      ],
      "line": 41
    },
    {
      "cells": [
        ""
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 624101,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 2746600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "duration": 570700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getHotelsByLocation",
      "offset": 25
    }
  ],
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "duration": 986894699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 3437000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 2373400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 802999,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.tajawal.stepdefs.CommonSteps.verifyResponseBodyValues(CommonSteps.java:390)\r\n\tat ✽.And response Body contains(GETHotelsByLocation.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 303101,
  "status": "passed"
});
formatter.before({
  "duration": 5714500,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "2) Verify error code and description for negative values - passing empty query param",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Unique-Reference-Code",
        ""
      ],
      "line": 33
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I pass queryParameters",
  "matchedColumns": [
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "",
        "paris"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I perform GET operation \"getHotelsByLocation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "response Body contains",
  "matchedColumns": [
    5
  ],
  "rows": [
    {
      "cells": [
        "\u003cerrorcode\u003e"
      ],
      "line": 41
    },
    {
      "cells": [
        ""
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 647299,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 5661701,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "duration": 337600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getHotelsByLocation",
      "offset": 25
    }
  ],
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "duration": 965333601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 1902000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 975500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 801100,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.tajawal.stepdefs.CommonSteps.verifyResponseBodyValues(CommonSteps.java:390)\r\n\tat ✽.And response Body contains(GETHotelsByLocation.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 260800,
  "status": "passed"
});
formatter.before({
  "duration": 8465601,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "2) Verify error code and description for negative values - passing empty query param  and value",
  "description": "",
  "id": "gethotelsbylocation---this-feature-file-validates-the-details-of-hotel-which-are-fetched-based-on-location-passed-as-the-query-parameter;2)-verify-error-code-and-description-for-negative-values---\u003cscenario\u003e;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Unique-Reference-Code",
        ""
      ],
      "line": 33
    },
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I pass queryParameters",
  "matchedColumns": [
    3,
    6
  ],
  "rows": [
    {
      "cells": [
        "",
        "paris"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I perform GET operation \"getHotelsByLocation\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "response Body contains",
  "matchedColumns": [
    5
  ],
  "rows": [
    {
      "cells": [
        "\u003cerrorcode\u003e"
      ],
      "line": 41
    },
    {
      "cells": [
        ""
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 535699,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 1624199,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setQueryParam(String,String\u003e)"
});
formatter.result({
  "duration": 258800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "getHotelsByLocation",
      "offset": 25
    }
  ],
  "location": "CommonSteps.invokeGETOperation(String)"
});
formatter.result({
  "duration": 881025499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 954499,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 1519699,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 669100,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.tajawal.stepdefs.CommonSteps.verifyResponseBodyValues(CommonSteps.java:390)\r\n\tat ✽.And response Body contains(GETHotelsByLocation.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 200999,
  "status": "passed"
});
formatter.uri("POSTSearchRequest.feature");
formatter.feature({
  "line": 1,
  "name": "This feature file validates the scenarios for the search query based on the information provided",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "1) Verify that search action is performed for the payload.",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;1)-verify-that-search-action-is-performed-for-the-payload.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I pass body as \"\u003cresourceName\u003e\"",
  "rows": [
    {
      "cells": [
        "checkin",
        "\u003ccheckin\u003e"
      ],
      "line": 9
    },
    {
      "cells": [
        "checkout",
        "\u003ccheckout\u003e"
      ],
      "line": 10
    },
    {
      "cells": [
        "destination",
        "\u003cdestination\u003e"
      ],
      "line": 11
    },
    {
      "cells": [
        "type1",
        "\u003cvalue1\u003e"
      ],
      "line": 12
    },
    {
      "cells": [
        "type2",
        "\u003cvalue2\u003e"
      ],
      "line": 13
    },
    {
      "cells": [
        "type3",
        "\u003cvalue3\u003e"
      ],
      "line": 14
    },
    {
      "cells": [
        "age1",
        "\u003cageValue1\u003e"
      ],
      "line": 15
    },
    {
      "cells": [
        "age2",
        "\u003cageValue2\u003e"
      ],
      "line": 16
    },
    {
      "cells": [
        "age3",
        "\u003cageValue3\u003e"
      ],
      "line": 17
    },
    {
      "cells": [
        "placeId",
        "\u003cplaceId\u003e"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I perform POST operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get \"\u003cstatus\u003e\" response",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "type"
      ],
      "line": 23
    },
    {
      "cells": [
        "query"
      ],
      "line": 24
    },
    {
      "cells": [
        "queryParameters"
      ],
      "line": 25
    },
    {
      "cells": [
        "sortBy"
      ],
      "line": 26
    },
    {
      "cells": [
        "isGeo"
      ],
      "line": 27
    },
    {
      "cells": [
        "hId"
      ],
      "line": 28
    },
    {
      "cells": [
        "isCountry"
      ],
      "line": 29
    },
    {
      "cells": [
        "placeId"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;1)-verify-that-search-action-is-performed-for-the-payload.;",
  "rows": [
    {
      "cells": [
        "status",
        "resourceName",
        "checkin",
        "checkout",
        "destinationValue",
        "value1",
        "value2",
        "value3",
        "ageValue1",
        "ageValue2",
        "ageValue3",
        "placeId"
      ],
      "line": 33,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;1)-verify-that-search-action-is-performed-for-the-payload.;;1"
    },
    {
      "cells": [
        "200",
        "postSearchRequests",
        "04-01-2021",
        "10-01-2021",
        "paris",
        "ADT",
        "ADT",
        "CHD",
        "NULL",
        "NULL",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 34,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;1)-verify-that-search-action-is-performed-for-the-payload.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15449100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "1) Verify that search action is performed for the payload.",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;1)-verify-that-search-action-is-performed-for-the-payload.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    1,
    2,
    3,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "04-01-2021"
      ],
      "line": 9
    },
    {
      "cells": [
        "checkout",
        "10-01-2021"
      ],
      "line": 10
    },
    {
      "cells": [
        "destination",
        "\u003cdestination\u003e"
      ],
      "line": 11
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 12
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 13
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 14
    },
    {
      "cells": [
        "age1",
        "NULL"
      ],
      "line": 15
    },
    {
      "cells": [
        "age2",
        "NULL"
      ],
      "line": 16
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 17
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "type"
      ],
      "line": 23
    },
    {
      "cells": [
        "query"
      ],
      "line": 24
    },
    {
      "cells": [
        "queryParameters"
      ],
      "line": 25
    },
    {
      "cells": [
        "sortBy"
      ],
      "line": 26
    },
    {
      "cells": [
        "isGeo"
      ],
      "line": 27
    },
    {
      "cells": [
        "hId"
      ],
      "line": 28
    },
    {
      "cells": [
        "isCountry"
      ],
      "line": 29
    },
    {
      "cells": [
        "placeId"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 1488301,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 4198900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 28624499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 1383891400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 2821899,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 10288800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 823899,
  "status": "passed"
});
formatter.after({
  "duration": 209600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "2) Validate mandatory fields in the payload-\u003cscenario\u003e",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I pass body as \"\u003cresourceName\u003e\"",
  "rows": [
    {
      "cells": [
        "checkin",
        "\u003ccheckin\u003e"
      ],
      "line": 42
    },
    {
      "cells": [
        "checkout",
        "\u003ccheckout\u003e"
      ],
      "line": 43
    },
    {
      "cells": [
        "destination",
        "\u003cdestination\u003e"
      ],
      "line": 44
    },
    {
      "cells": [
        "type1",
        "\u003cvalue1\u003e"
      ],
      "line": 45
    },
    {
      "cells": [
        "type2",
        "\u003cvalue2\u003e"
      ],
      "line": 46
    },
    {
      "cells": [
        "type3",
        "\u003cvalue3\u003e"
      ],
      "line": 47
    },
    {
      "cells": [
        "age1",
        "\u003cageValue1\u003e"
      ],
      "line": 48
    },
    {
      "cells": [
        "age2",
        "\u003cageValue2\u003e"
      ],
      "line": 49
    },
    {
      "cells": [
        "age3",
        "\u003cageValue3\u003e"
      ],
      "line": 50
    },
    {
      "cells": [
        "placeId",
        "\u003cplaceId\u003e"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I perform POST operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should get \"\u003cstatus\u003e\" response",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "\u003cerrordesc\u003e"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 58,
      "value": "#statuscode mentioned as 200 for the scenarios where it should fail but is actually 200 OK given by the system"
    }
  ],
  "line": 59,
  "name": "",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;",
  "rows": [
    {
      "cells": [
        "scenario",
        "status",
        "resourceName",
        "checkin",
        "checkout",
        "destination",
        "value1",
        "value2",
        "value3",
        "ageValue1",
        "ageValue2",
        "ageValue3",
        "placeId",
        "errordesc"
      ],
      "line": 60,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;;1"
    },
    {
      "cells": [
        "mandatory check-checkin date",
        "200",
        "postSearchRequests",
        "NA",
        "10-01-2021",
        "paris",
        "ADT",
        "ADT",
        "CHD",
        "NULL",
        "NULL",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        ""
      ],
      "line": 61,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;;2"
    },
    {
      "cells": [
        "mandatory check-checkout date",
        "200",
        "postSearchRequests",
        "04-01-2021",
        "NA",
        "paris",
        "ADT",
        "ADT",
        "CHD",
        "NULL",
        "NULL",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        ""
      ],
      "line": 62,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;;3"
    },
    {
      "cells": [
        "mandatory check-destination",
        "400",
        "postSearchRequests",
        "04-01-2021",
        "10-01-2021",
        "NA",
        "ADT",
        "ADT",
        "CHD",
        "NA",
        "NA",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "The destination field is required."
      ],
      "line": 63,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;;4"
    },
    {
      "cells": [
        "mandatory check-placeId",
        "200",
        "postSearchRequests",
        "04-01-2021",
        "10-01-2021",
        "paris",
        "ADT",
        "ADT",
        "CHD",
        "NA",
        "NA",
        "3",
        "NA",
        ""
      ],
      "line": 64,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11122800,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "2) Validate mandatory fields in the payload-mandatory check-checkin date",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "NA"
      ],
      "line": 42
    },
    {
      "cells": [
        "checkout",
        "10-01-2021"
      ],
      "line": 43
    },
    {
      "cells": [
        "destination",
        "paris"
      ],
      "line": 44
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 45
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 46
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 47
    },
    {
      "cells": [
        "age1",
        "NULL"
      ],
      "line": 48
    },
    {
      "cells": [
        "age2",
        "NULL"
      ],
      "line": 49
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 50
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        ""
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 738800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 4878600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 3274300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 1099272701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 1123100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 937501,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 398900,
  "status": "passed"
});
formatter.after({
  "duration": 241000,
  "status": "passed"
});
formatter.before({
  "duration": 12255000,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "2) Validate mandatory fields in the payload-mandatory check-checkout date",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "04-01-2021"
      ],
      "line": 42
    },
    {
      "cells": [
        "checkout",
        "NA"
      ],
      "line": 43
    },
    {
      "cells": [
        "destination",
        "paris"
      ],
      "line": 44
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 45
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 46
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 47
    },
    {
      "cells": [
        "age1",
        "NULL"
      ],
      "line": 48
    },
    {
      "cells": [
        "age2",
        "NULL"
      ],
      "line": 49
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 50
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        ""
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 646201,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 5095600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 2711100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 980715800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 1788900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 5009901,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 377400,
  "status": "passed"
});
formatter.after({
  "duration": 1699200,
  "status": "passed"
});
formatter.before({
  "duration": 47677800,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "2) Validate mandatory fields in the payload-mandatory check-destination",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "04-01-2021"
      ],
      "line": 42
    },
    {
      "cells": [
        "checkout",
        "10-01-2021"
      ],
      "line": 43
    },
    {
      "cells": [
        "destination",
        "NA"
      ],
      "line": 44
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 45
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 46
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 47
    },
    {
      "cells": [
        "age1",
        "NA"
      ],
      "line": 48
    },
    {
      "cells": [
        "age2",
        "NA"
      ],
      "line": 49
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 50
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should get \"400\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        "The destination field is required."
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 334400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 2360599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 1624999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 1051239200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 4820100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 1832000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 214800,
  "status": "passed"
});
formatter.after({
  "duration": 362900,
  "status": "passed"
});
formatter.before({
  "duration": 5958301,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "2) Validate mandatory fields in the payload-mandatory check-placeId",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;2)-validate-mandatory-fields-in-the-payload-\u003cscenario\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "04-01-2021"
      ],
      "line": 42
    },
    {
      "cells": [
        "checkout",
        "10-01-2021"
      ],
      "line": 43
    },
    {
      "cells": [
        "destination",
        "paris"
      ],
      "line": 44
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 45
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 46
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 47
    },
    {
      "cells": [
        "age1",
        "NA"
      ],
      "line": 48
    },
    {
      "cells": [
        "age2",
        "NA"
      ],
      "line": 49
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 50
    },
    {
      "cells": [
        "placeId",
        "NA"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        ""
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 885100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 1051900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 2757500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 1130425700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 942100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 1169200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 190900,
  "status": "passed"
});
formatter.after({
  "duration": 396400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "3) Validate negative validations for fields in the payload-\u003cscenario\u003e",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 70
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I pass body as \"\u003cresourceName\u003e\"",
  "rows": [
    {
      "cells": [
        "checkin",
        "\u003ccheckin\u003e"
      ],
      "line": 72
    },
    {
      "cells": [
        "checkout",
        "\u003ccheckout\u003e"
      ],
      "line": 73
    },
    {
      "cells": [
        "destination",
        "\u003cdestination\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "type1",
        "\u003cvalue1\u003e"
      ],
      "line": 75
    },
    {
      "cells": [
        "type2",
        "\u003cvalue2\u003e"
      ],
      "line": 76
    },
    {
      "cells": [
        "type3",
        "\u003cvalue3\u003e"
      ],
      "line": 77
    },
    {
      "cells": [
        "age1",
        "\u003cageValue1\u003e"
      ],
      "line": 78
    },
    {
      "cells": [
        "age2",
        "\u003cageValue2\u003e"
      ],
      "line": 79
    },
    {
      "cells": [
        "age3",
        "\u003cageValue3\u003e"
      ],
      "line": 80
    },
    {
      "cells": [
        "placeId",
        "\u003cplaceId\u003e"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I perform POST operation \"\u003cresourceName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I should get \"\u003cstatus\u003e\" response",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "response Body contains",
  "rows": [
    {
      "cells": [
        "\u003cerrordesc\u003e"
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 88,
      "value": "#statuscode mentioned as 200 for the scenarios where it should fail but is actually 200 OK given by the system"
    }
  ],
  "line": 89,
  "name": "",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;",
  "rows": [
    {
      "cells": [
        "scenario",
        "status",
        "resourceName",
        "checkin",
        "checkout",
        "destination",
        "value1",
        "value2",
        "value3",
        "ageValue1",
        "ageValue2",
        "ageValue3",
        "placeId",
        "errordesc"
      ],
      "line": 90,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;1"
    },
    {
      "cells": [
        "checkin date format validation",
        "400",
        "postSearchRequests",
        "10-01",
        "10-01-2021",
        "paris",
        "ADT",
        "ADT",
        "CHD",
        "NULL",
        "NULL",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "The dates.checkin is not a valid date."
      ],
      "line": 91,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;2"
    },
    {
      "cells": [
        "checkin date greater than checkout",
        "400",
        "postSearchRequests",
        "11-01-2021",
        "10-01-2021",
        "paris",
        "ADT",
        "ADT",
        "CHD",
        "NULL",
        "NULL",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "The dates.checkout must be a date after dates.checkin."
      ],
      "line": 92,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;3"
    },
    {
      "cells": [
        "format check-checkout date",
        "400",
        "postSearchRequests",
        "04-01-2021",
        "10-01",
        "paris",
        "ADT",
        "ADT",
        "CHD",
        "NULL",
        "NULL",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "The dates.checkout is not a valid date."
      ],
      "line": 93,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;4"
    },
    {
      "cells": [
        "checkout date less than check in date",
        "400",
        "postSearchRequests",
        "04-01-2021",
        "03-01-2021",
        "paris",
        "ADT",
        "ADT",
        "CHD",
        "NULL",
        "NULL",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        "The dates.checkout must be a date after dates.checkin."
      ],
      "line": 94,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;5"
    },
    {
      "cells": [
        "format check destination",
        "200",
        "postSearchRequests",
        "04-01-2021",
        "10-01-2021",
        "(\u0026!\u003c\u003e\u003e\u003e",
        "ADT",
        "ADT",
        "CHD",
        "NA",
        "NA",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        ""
      ],
      "line": 95,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;6"
    },
    {
      "cells": [
        "format check type",
        "200",
        "postSearchRequests",
        "04-01-2021",
        "10-01-2021",
        "paris",
        "DHC",
        "ADT",
        "CHD",
        "NA",
        "NA",
        "3",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
        ""
      ],
      "line": 96,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;7"
    },
    {
      "cells": [
        "format check placeId",
        "200",
        "postSearchRequests",
        "04-01-2021",
        "10-01-2021",
        "paris",
        "ADT",
        "ADT",
        "CHD",
        "NA",
        "NA",
        "3",
        "+_}{}()",
        ""
      ],
      "line": 97,
      "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10311399,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "3) Validate negative validations for fields in the payload-checkin date format validation",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 70
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "10-01"
      ],
      "line": 72
    },
    {
      "cells": [
        "checkout",
        "10-01-2021"
      ],
      "line": 73
    },
    {
      "cells": [
        "destination",
        "paris"
      ],
      "line": 74
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 75
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 76
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 77
    },
    {
      "cells": [
        "age1",
        "NULL"
      ],
      "line": 78
    },
    {
      "cells": [
        "age2",
        "NULL"
      ],
      "line": 79
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 80
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I should get \"400\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        "The dates.checkin is not a valid date."
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 1132900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 2150500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 2549699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 1372475100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 958600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 1130400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 191000,
  "status": "passed"
});
formatter.after({
  "duration": 235400,
  "status": "passed"
});
formatter.before({
  "duration": 6804000,
  "status": "passed"
});
formatter.scenario({
  "line": 92,
  "name": "3) Validate negative validations for fields in the payload-checkin date greater than checkout",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 70
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "11-01-2021"
      ],
      "line": 72
    },
    {
      "cells": [
        "checkout",
        "10-01-2021"
      ],
      "line": 73
    },
    {
      "cells": [
        "destination",
        "paris"
      ],
      "line": 74
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 75
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 76
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 77
    },
    {
      "cells": [
        "age1",
        "NULL"
      ],
      "line": 78
    },
    {
      "cells": [
        "age2",
        "NULL"
      ],
      "line": 79
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 80
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I should get \"400\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        "The dates.checkout must be a date after dates.checkin."
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 925400,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 2004400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 2230999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 1113868900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 2244199,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 3824200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 212499,
  "status": "passed"
});
formatter.after({
  "duration": 1344800,
  "status": "passed"
});
formatter.before({
  "duration": 20868500,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "3) Validate negative validations for fields in the payload-format check-checkout date",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 70
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "04-01-2021"
      ],
      "line": 72
    },
    {
      "cells": [
        "checkout",
        "10-01"
      ],
      "line": 73
    },
    {
      "cells": [
        "destination",
        "paris"
      ],
      "line": 74
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 75
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 76
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 77
    },
    {
      "cells": [
        "age1",
        "NULL"
      ],
      "line": 78
    },
    {
      "cells": [
        "age2",
        "NULL"
      ],
      "line": 79
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 80
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I should get \"400\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        "The dates.checkout is not a valid date."
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 1789100,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 3199200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 2695500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 1049744400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 682900,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 549101,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 202300,
  "status": "passed"
});
formatter.after({
  "duration": 391299,
  "status": "passed"
});
formatter.before({
  "duration": 9531101,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "3) Validate negative validations for fields in the payload-checkout date less than check in date",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 70
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "04-01-2021"
      ],
      "line": 72
    },
    {
      "cells": [
        "checkout",
        "03-01-2021"
      ],
      "line": 73
    },
    {
      "cells": [
        "destination",
        "paris"
      ],
      "line": 74
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 75
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 76
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 77
    },
    {
      "cells": [
        "age1",
        "NULL"
      ],
      "line": 78
    },
    {
      "cells": [
        "age2",
        "NULL"
      ],
      "line": 79
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 80
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I should get \"400\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        "The dates.checkout must be a date after dates.checkin."
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 2962600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 6423800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 5160801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 988888300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 2095200,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 2030199,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 1238799,
  "status": "passed"
});
formatter.after({
  "duration": 1923899,
  "status": "passed"
});
formatter.before({
  "duration": 7011399,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "3) Validate negative validations for fields in the payload-format check destination",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 70
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "04-01-2021"
      ],
      "line": 72
    },
    {
      "cells": [
        "checkout",
        "10-01-2021"
      ],
      "line": 73
    },
    {
      "cells": [
        "destination",
        "(\u0026!\u003c\u003e\u003e\u003e"
      ],
      "line": 74
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 75
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 76
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 77
    },
    {
      "cells": [
        "age1",
        "NA"
      ],
      "line": 78
    },
    {
      "cells": [
        "age2",
        "NA"
      ],
      "line": 79
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 80
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        ""
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 741600,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 3428501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 2914199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 959118300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 1505300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 727099,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 163900,
  "status": "passed"
});
formatter.after({
  "duration": 327000,
  "status": "passed"
});
formatter.before({
  "duration": 5772501,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "3) Validate negative validations for fields in the payload-format check type",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 70
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "04-01-2021"
      ],
      "line": 72
    },
    {
      "cells": [
        "checkout",
        "10-01-2021"
      ],
      "line": 73
    },
    {
      "cells": [
        "destination",
        "paris"
      ],
      "line": 74
    },
    {
      "cells": [
        "type1",
        "DHC"
      ],
      "line": 75
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 76
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 77
    },
    {
      "cells": [
        "age1",
        "NA"
      ],
      "line": 78
    },
    {
      "cells": [
        "age2",
        "NA"
      ],
      "line": 79
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 80
    },
    {
      "cells": [
        "placeId",
        "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        ""
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 633500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 1924200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 2159599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 1038895100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 722800,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 527300,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 223000,
  "status": "passed"
});
formatter.after({
  "duration": 174400,
  "status": "passed"
});
formatter.before({
  "duration": 6437400,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "3) Validate negative validations for fields in the payload-format check placeId",
  "description": "",
  "id": "this-feature-file-validates-the-scenarios-for-the-search-query-based-on-the-information-provided;3)-validate-negative-validations-for-fields-in-the-payload-\u003cscenario\u003e;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@hotels_Regression"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Testing environment",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I pass headers",
  "rows": [
    {
      "cells": [
        "Content-Type",
        "application/json"
      ],
      "line": 70
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I pass body as \"postSearchRequests\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "rows": [
    {
      "cells": [
        "checkin",
        "04-01-2021"
      ],
      "line": 72
    },
    {
      "cells": [
        "checkout",
        "10-01-2021"
      ],
      "line": 73
    },
    {
      "cells": [
        "destination",
        "paris"
      ],
      "line": 74
    },
    {
      "cells": [
        "type1",
        "ADT"
      ],
      "line": 75
    },
    {
      "cells": [
        "type2",
        "ADT"
      ],
      "line": 76
    },
    {
      "cells": [
        "type3",
        "CHD"
      ],
      "line": 77
    },
    {
      "cells": [
        "age1",
        "NA"
      ],
      "line": 78
    },
    {
      "cells": [
        "age2",
        "NA"
      ],
      "line": 79
    },
    {
      "cells": [
        "age3",
        "3"
      ],
      "line": 80
    },
    {
      "cells": [
        "placeId",
        "+_}{}()"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I perform POST operation \"postSearchRequests\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I should get \"200\" response",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "response content Type is json",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "response Body contains",
  "matchedColumns": [
    13
  ],
  "rows": [
    {
      "cells": [
        ""
      ],
      "line": 86
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.getBaseURI()"
});
formatter.result({
  "duration": 483000,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.setHeaders(String,String\u003e)"
});
formatter.result({
  "duration": 2031700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 16
    }
  ],
  "location": "CommonSteps.setBody(String,String,String\u003e)"
});
formatter.result({
  "duration": 2034100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postSearchRequests",
      "offset": 26
    }
  ],
  "location": "CommonSteps.invokePOSTOperation(String)"
});
formatter.result({
  "duration": 916461700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "CommonSteps.verifyHTTPStatusCode(String)"
});
formatter.result({
  "duration": 573801,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseContentType()"
});
formatter.result({
  "duration": 574601,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.verifyResponseBodyValues(DataTable)"
});
formatter.result({
  "duration": 125700,
  "status": "passed"
});
formatter.after({
  "duration": 140401,
  "status": "passed"
});
});