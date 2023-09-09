import {When} from '@cucumber/cucumber';
import {element, by, expect} from 'detox';

When("I toggle the animation's switch", async () => {
  await element(by.id('animationSwitch')).tap();
  await expect(element(by.id('animationSwitch'))).toHaveToggleValue(true);
  await element(by.id('animationSwitch')).tap();
  await expect(element(by.id('animationSwitch'))).toHaveToggleValue(false);
});
