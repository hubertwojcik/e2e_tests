import {When, Then, setDefaultTimeout} from '@cucumber/cucumber';

import {element} from 'detox';
import CountersPage from '../../pageObjects/CountersPage';

setDefaultTimeout(120 * 1000);

When('the Counters page is correctly displayed', async () => {
  await CountersPage.verifyCountersPage();
});

Then('I tap the {string} Counter {int} times', async (counter, tapsNumber) => {
  await CountersPage.tapCounter(counter, tapsNumber);
});
