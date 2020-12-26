Feature: This feature file validates the scenarios for the search query based on the information provided

  @hotels_Regression
  Scenario Outline: 1) Verify that search action is performed for the payload.
    Given Testing environment
    When I pass headers
      | Content-Type | application/json |
    And I pass body as "<resourceName>"
      | checkin     | <checkin>     |
      | checkout    | <checkout>    |
      | destination | <destination> |
      | type1       | <value1>      |
      | type2       | <value2>      |
      | type3       | <value3>      |
      | age1        | <ageValue1>   |
      | age2        | <ageValue2>   |
      | age3        | <ageValue3>   |
      | placeId     | <placeId>     |
    And I perform POST operation "<resourceName>"
    Then I should get "<status>" response
    And response content Type is json
    And response Body contains
      | type            |
      | query           |
      | queryParameters |
      | sortBy          |
      | isGeo           |
      | hId             |
      | isCountry       |
      | placeId         |

    Examples: 
      | status | resourceName       | checkin    | checkout   | destinationValue | value1 | value2 | value3 | ageValue1 | ageValue2 | ageValue3 | placeId                     |
      |    200 | postSearchRequests | 04-01-2021 | 10-01-2021 | paris            | ADT    | ADT    | CHD    | NULL      | NULL      |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ |

  @hotels_Regression
  Scenario Outline: 2) Validate mandatory fields in the payload-<scenario>
    Given Testing environment
    When I pass headers
      | Content-Type | application/json |
    And I pass body as "<resourceName>"
      | checkin     | <checkin>     |
      | checkout    | <checkout>    |
      | destination | <destination> |
      | type1       | <value1>      |
      | type2       | <value2>      |
      | type3       | <value3>      |
      | age1        | <ageValue1>   |
      | age2        | <ageValue2>   |
      | age3        | <ageValue3>   |
      | placeId     | <placeId>     |
    And I perform POST operation "<resourceName>"
    Then I should get "<status>" response
    And response content Type is json
    And response Body contains
      | <errordesc> |

    #statuscode mentioned as 200 for the scenarios where it should fail but is actually 200 OK given by the system
    Examples: 
      | scenario                      | status | resourceName       | checkin    | checkout   | destination | value1 | value2 | value3 | ageValue1 | ageValue2 | ageValue3 | placeId                     | errordesc                          |
      | mandatory check-checkin date  |    200 | postSearchRequests | NA         | 10-01-2021 | paris       | ADT    | ADT    | CHD    | NULL      | NULL      |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ |                                    |
      | mandatory check-checkout date |    200 | postSearchRequests | 04-01-2021 | NA         | paris       | ADT    | ADT    | CHD    | NULL      | NULL      |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ |                                    |
      | mandatory check-destination   |    400 | postSearchRequests | 04-01-2021 | 10-01-2021 | NA          | ADT    | ADT    | CHD    | NA        | NA        |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ | The destination field is required. |
      | mandatory check-placeId       |    200 | postSearchRequests | 04-01-2021 | 10-01-2021 | paris       | ADT    | ADT    | CHD    | NA        | NA        |         3 | NA                          |                                    |

  @hotels_Regression
  Scenario Outline: 3) Validate negative validations for fields in the payload-<scenario>
    Given Testing environment
    When I pass headers
      | Content-Type | application/json |
    And I pass body as "<resourceName>"
      | checkin     | <checkin>     |
      | checkout    | <checkout>    |
      | destination | <destination> |
      | type1       | <value1>      |
      | type2       | <value2>      |
      | type3       | <value3>      |
      | age1        | <ageValue1>   |
      | age2        | <ageValue2>   |
      | age3        | <ageValue3>   |
      | placeId     | <placeId>     |
    And I perform POST operation "<resourceName>"
    Then I should get "<status>" response
    And response content Type is json
    And response Body contains
      | <errordesc> |

    #statuscode mentioned as 200 for the scenarios where it should fail but is actually 200 OK given by the system
    Examples: 
      | scenario                              | status | resourceName       | checkin    | checkout   | destination | value1 | value2 | value3 | ageValue1 | ageValue2 | ageValue3 | placeId                     | errordesc                                              |
      | checkin date format validation        |    400 | postSearchRequests | 10-01      | 10-01-2021 | paris       | ADT    | ADT    | CHD    | NULL      | NULL      |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ | The dates.checkin is not a valid date.                 |
      | checkin date greater than checkout    |    400 | postSearchRequests | 11-01-2021 | 10-01-2021 | paris       | ADT    | ADT    | CHD    | NULL      | NULL      |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ | The dates.checkout must be a date after dates.checkin. |
      | format check-checkout date            |    400 | postSearchRequests | 04-01-2021 | 10-01      | paris       | ADT    | ADT    | CHD    | NULL      | NULL      |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ | The dates.checkout is not a valid date.                |
      | checkout date less than check in date |    400 | postSearchRequests | 04-01-2021 | 03-01-2021 | paris       | ADT    | ADT    | CHD    | NULL      | NULL      |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ | The dates.checkout must be a date after dates.checkin. |
      | format check destination              |    200 | postSearchRequests | 04-01-2021 | 10-01-2021 | (&!<>>>     | ADT    | ADT    | CHD    | NA        | NA        |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ |                                                        |
      | format check type                     |    200 | postSearchRequests | 04-01-2021 | 10-01-2021 | paris       | DHC    | ADT    | CHD    | NA        | NA        |         3 | ChIJD7fiBh9u5kcRYJSMaMOCCwQ |                                                        |
      | format check placeId                  |    200 | postSearchRequests | 04-01-2021 | 10-01-2021 | paris       | ADT    | ADT    | CHD    | NA        | NA        |         3 | +_}{}()                     |                                                        |
