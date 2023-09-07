import {Given, Then, setDefaultTimeout} from '@cucumber/cucumber';
import {element, by} from 'detox';
import CommonPage from '../../pageObjects/CommonPage';

setDefaultTimeout(120 * 1000);

Given('I tap on the {string} navigation tab section', async section => {
  await CommonPage.tapNavigationSection(section);
});

Then('I tap the back button', async () => {
  await element(by.label('header-back')).atIndex(0).tap();
});
