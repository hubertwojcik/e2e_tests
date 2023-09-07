import {Given, Then} from '@cucumber/cucumber';
import HomePage from '../../pageObjects/HomePage';

Given('I tap on the {string} Home section', async section => {
  await HomePage.tapHomeSection(section);
});

Then('the Home page is correctly displayed', async () => {
  await HomePage.verifyHomePage();
});
