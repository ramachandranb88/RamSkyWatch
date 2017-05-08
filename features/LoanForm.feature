Feature: Loan request form validation postive scenarios

# Tests to validate loan request form fields

@SmokeTest
Scenario: SmokeTest TC1: Verify login and apply fancy pop up is displayed when users selects the option as has citi bank salary account
Given I Launch URL "https://www.online.citibank.co.in/products-services/loans/ready-cash-personal-loan-form.htm" in "16u" browser
Then I click on element "@citiSalaryYes"
Then I verify element "@fancyPopUp" is displayed


@SmokeTest
Scenario: RF3_TC1:Loan Form - Verify user is able to fill loan request form fields with valid details and [Reset]]/[Submit] button is enabled
Given I Launch URL "https://www.online.citibank.co.in/products-services/loans/ready-cash-personal-loan-form.htm" in "16u" browser
Then I fill the form with valid details
And I validate Reset button and Submit button is enabled
