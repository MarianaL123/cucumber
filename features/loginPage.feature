
Feature: The Internet Guinea Pig Website

  Scenario Outline: User sees error message for missing username

    Given User is located on the main page of saucedemo website
    When User clicks the "Login" button
    Then User should see the error message "Epic sadface: Username is required"