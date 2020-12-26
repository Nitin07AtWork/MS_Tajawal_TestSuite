Feature: GETHotelsByLocation - This feature file validates the details of hotel which are fetched based on location passed as the query parameter

  @hotels_Regression
  Scenario Outline: 1) Verify hotel details are fetched for location - <query>
    Given Testing environment
    When I pass headers
      | Content-Type | application/json |
    And I pass queryParameters
      | query | <location> |
    And I perform GET operation "<resourceName>"
    Then I should get "<status>" response
    And response content Type is json
    And response Body contains
      | hotels        |
      | hotelId       |
      | name          |
      | city          |
      | country       |
      | thumbnail_url |
      | displayType   |
      | latitude      |
      | longitude     |
      | isActive      |

    Examples: 
      | status | resourceName        | location |
      |    200 | getHotelsByLocation | paris    |

  @hotels_Regression
  Scenario Outline: 2) Verify error code and description for negative values - <scenario>
    Given Testing environment
    When I pass headers
      | Unique-Reference-Code |                  |
      | Content-Type          | application/json |
    And I pass queryParameters
      | <param> | <locationValue> |
    And I perform GET operation "<resourceName>"
    Then I should get "<status>" response
    And response content Type is json
    And response Body contains
      | <errorcode> |
      | <errordesc> |

    #statuscode mentioned as 200 for the scenarios where it should fail but is actually 200 OK given by the system
    @getHotelsByLocationneg
    Examples: 
      | scenario                                      | status | resourceName        | locationValue | errorCode | errordesc | param |
      | invalid location value-special chars          |    200 | getHotelsByLocation | $&+_><        |           |           | query |
      | invalid location value-location doesn't exist |    200 | getHotelsByLocation | zxdfkl        |           |           | query |
      | passing empty value                           |    200 | getHotelsByLocation |               |           |           | query |
      | passing invalid value                         |    200 | getHotelsByLocation | paris         |           |           | q     |
      | passing empty query param                     |    200 | getHotelsByLocation | paris         |           |           |       |
      | passing empty query param  and value          |    200 | getHotelsByLocation | paris         |           |           |       |

  Scenario Outline: 3) Verify error code and description for negative header validation - <scenario>
    Given Testing environment
    When I pass headers
      | Unique-Reference-Code |                |
      | Content-Type          | apple/jayshawn |
    And I pass queryParameters
      | <param> | <locationValue> |
    And I perform GET operation "<resourceName>"
    Then I should get "<status>" response
    And response content Type is json
    And response Body contains
      | <errordesc> |

    #statuscode mentioned as 200 for the scenarios where it should fail but is actually 200 OK given by the system
    Examples: 
      | scenario             | status | resourceName        | locationValue | errordesc | param |
      | invalid Content-Type |    200 | getHotelsByLocation | paris         |           | query |
