Feature: Element expectations
    Expectations on elements can be conducted for different properties

    @expectations @visibility
    Scenario: I can expect elements to be visible of to not be visible
    Given I tap on the 'Cities' section
    When I verify that the first image of the row is visible
    Then I verify that the last image of the row is not visible
    
    @expectations @existence
    Scenario: I can expect element to exist or to not exist
    Given I tap on the 'Cities' section
    When I verify that the first image of the Asia row  exists
    Then I verify that the Water Counter doesnt exists

    @expectations @content
    Scenario: I can expect element to have specific text, label or ID
    Given I tap on the 'Members' section
    When I expect the Member List header to be 'Members'
    And I expect the Add Member button to have 'addMemberLabel' as label
    Then I expect the Add Member button to have 'addMemberIcon' as ID