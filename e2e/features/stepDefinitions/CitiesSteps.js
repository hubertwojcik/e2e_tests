import {When, Then, setDefaultTimeout} from '@cucumber/cucumber';
import CitiesPage from '../../pageObjects/CitiesPage';
import {element} from 'detox';

setDefaultTimeout(120 * 1000);

When('the Cities page is correctly displayed', async () => {
  await CitiesPage.verifyCitiesPage();
});

Then(
  'I scroll {string} at {int} pixels {string} to image number {int}',
  async (continent, pixels, direction, number) => {
    await CitiesPage.scrollCities(
      continent.toLowerCase(),
      pixels,
      direction.toLowerCase(),
      number - 1,
    );
  },
);

Then('I scroll {string} to the {string}', async (elementId, edge) => {
  await element(CitiesPage.continentBackground(elementId)).scrollTo(edge);
});
