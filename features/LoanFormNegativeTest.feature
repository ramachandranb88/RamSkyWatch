Feature: Loan form test negative scenarios

@SmokeTest
Scenario: SmokeTestTC3: Negative Scenarios - Error validation - Verify expected error message is displayed when mobile no is left blank
Given I Launch URL "https://www.online.citibank.co.in/products-services/loans/ready-cash-personal-loan-form.htm" in "16u" browser
Then I fill the form with valid details
When I enter text - " " at element "@mobileNo" text field
Then I click on element "@submitBtn"
Then I validated the text at element "@mobileNoError" is displayed as "(Please enter your Mobile Number)"


@SmokeTest
Scenario: SmokeTestTC4: Negative Scenarios - Fail test sample run
Given I Launch URL "https://www.online.citibank.co.in/products-services/loans/ready-cash-personal-loan-form.htm" in "16u" browser
Then I fill the form with valid details
When I enter text - " " at element "@mobileNo" text field
Then I click on element "@submitBtn"
Then I validated the text at element "@mobileNoError" is displayed as "(Please enter your Mobile Number XXXXXXXXXXX)"
