import {Given, setDefaultTimeout} from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

Given('I start detox', async () => {
  console.log('Test started');
});
