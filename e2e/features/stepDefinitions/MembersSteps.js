import {When, Then, setDefaultTimeout} from '@cucumber/cucumber';

import {element, by} from 'detox';
import FormPage from '../../pageObjects/FormPage';
import MemberListPage from '../../pageObjects/MemberListPage';

setDefaultTimeout(120 * 1000);

When(
  'the Member List page is correctly displayed for {int} members',
  async membersCount => {
    await MemberListPage.verifyMemberListPage(membersCount);
  },
);

Then('I tap the Add Member icon', async () => {
  await MemberListPage.addMemberIcon.atIndex(0).tap();
});

When('the Add Member page is correctly displayed', async () => {
  await FormPage.verifyAddMemberPage();
});
