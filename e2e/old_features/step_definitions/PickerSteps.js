import {Then, setDefaultTimeout, When} from '@cucumber/cucumber';
import {element, by, device} from 'detox';
import Utilities from '../../helpers/Utilities';

setDefaultTimeout(120 * 1000);

When(
  'I enter {string} {string} {string} as Date of Birth',
  async (day, month, year) => {
    await element(by.id('formLabel-dateOfBirth')).tap();
    await Utilities.selectDatePickerDate(day, month, year);
    await Utilities.confirmPickerButton();
  },
);

Then('I select {string} as Start Day', async day => {
  await element(by.id('formLabel-startDay')).tap();
  await Utilities.selectPickerValues(
    element(by.id('formPicker-startDay')),
    day,
  );
});

Then(
  'I select {string} as Country swiping {string}',
  async (country, swipeDirection) => {
    await element(by.id('formBackground')).swipe('up');
    await element(by.id('formLabel-country')).tap();
    await Utilities.selectPickerValues(
      element(by.id('formPicker-country')),
      country,
      swipeDirection,
    );
  },
);

Then('I enter {string} {string} as Start Time', async (hours, minutes) => {
  await element(by.id('formBackground')).swipe('up');
  await element(by.id('formLabel-startTime')).tap();

  await Utilities.setTime(hours, minutes);
  await Utilities.confirmPickerButton();
});
