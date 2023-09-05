import {When, setDefaultTimeout, Given} from '@cucumber/cucumber';
import {element, by} from 'detox';

setDefaultTimeout(120 * 1000);

Given('I tap on the {string} navigation tab', async section => {
  await element(by.id(`${section.toLowerCase()}NavigationSection`))
    .atIndex(0)
    .tap();
  await element(by.id(`${section.toLowerCase()}NavigationImage`))
    .atIndex(0)
    .tap();
});

When('I tap on the Add Member Icon', async () => {
  await element(by.id('memberListHeader')).atIndex(0).tap();
  await element(by.id('addMemberIcon')).atIndex(0).tap();
});
