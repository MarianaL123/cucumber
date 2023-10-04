
import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser, $ } from '@wdio/globals'
import { assert } from 'chai';

Given('User is located on the main page of saucedemo website', async () => {
  await browser.url('https://www.saucedemo.com/');
});

When('User clicks the "Login" button', async () => {
  const loginButton = await $('#login-button');
  await loginButton.click();
});

Then('User should see the error message {string}', async (errorMessage) => {
    const errorElement = await $('div.error-message-container');
    const errorText = await errorElement.getText(); 
    assert.strictEqual(errorText, errorMessage, 'The strings are not equal');

});