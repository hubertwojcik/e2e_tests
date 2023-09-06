import {Then, setDefaultTimeout, When} from '@cucumber/cucumber';
import {element, by} from 'detox';
import Utilities from '../../helpers/Utilities';

setDefaultTimeout(120 * 1000);

// Interacting with Calendar
Then(
  'I select {string} {string} of {string} {string} date in the Calendar',
  async (weekday, day, month, year) => {
    await Utilities.scrollToElement(
      element(by.id('formInput-startDate')),
      by.id('formBackground'),
      300,
      'down',
    );
    await element(by.id('formLabel-startDate')).tap();
    await element(by.id('formBackground')).swipe('up');
    await Utilities.selectCalendarDate(weekday, day, month, year);
  },
);

//Scrolling actions
When(
  'I scroll {string} {int} pixels {string}',
  async (eleentId, pixels, direction) => {
    await element(by.id(eleentId)).scroll(pixels, direction);
  },
);

When(
  'I scroll {string} to {string} at {int} pixels {string}',
  async (backgroundId, targetElementId, pixels, direction) => {
    await Utilities.scrollToElement(
      element(by.id(targetElementId)),
      by.id(backgroundId),
      pixels,
      direction,
    );
    // await waitFor(element(by.id(targetElementId)))
    // .toBeVisible()
    // .whileElement(by.id(backgroundId))
    // .scroll(pixels, direction);
  },
);

Then(
  'I scroll {string} {int} pixels {string} with X: {float} and Y: {float}',
  async (eleentId, pixels, direction, x, y) => {
    await element(by.id(eleentId)).scroll(pixels, direction, x, y);
  },
);

Then('I scroll {string} to the {string}', async (elementId, edge) => {
  await element(by.id(elementId)).scrollTo(edge);
});

//Swiping actions Veritaclly
Then('I swipe {string} {string}', async (elementId, direction) => {
  await element(by.id(elementId)).swipe(direction);
});

Then(
  'I swipe {string} {string} {string}',
  async (elementId, direction, speed) => {
    await element(by.id(elementId)).swipe(direction, speed);
  },
);

Then(
  'I swipe {string} {string} {string} for {float} of the screen',
  async (elementId, direction, speed, float) => {
    await element(by.id(elementId)).swipe(direction, speed, float);
  },
);

//Typing actions
Then(
  'I type {string} as Name and {string} as Surname',
  async (name, surname) => {
    await element(by.id('formInput-name')).typeText(name);
    await element(by.id('formInput-surname')).typeText(surname);
    await element(by.id('formInput-surname')).tapBackspaceKey();
  },
);

Then(
  'I replace {string} in Name and {string} in Surname',
  async (name, surname) => {
    await element(by.id('formInput-name')).replaceText(name);
    await element(by.id('formInput-surname')).replaceText(surname);
    await element(by.id('formInput-surname')).tapReturnKey();
  },
);

Then(
  'I enter {string} in Name and {string} in Surname',
  async (name, surname) => {
    await Utilities.typeInElement(element(by.id('formInput-name')), name);
    await Utilities.typeInElement(element(by.id('formInput-surname')), surname);
  },
);
