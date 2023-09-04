import {Then, setDefaultTimeout} from '@cucumber/cucumber';
import {element, by} from 'detox';

setDefaultTimeout(120 * 1000);

Then('I tap the back button', async () => {
  await element(by.label('header-back')).atIndex(0).tap();
});
