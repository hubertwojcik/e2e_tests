import {When, Then, setDefaultTimeout} from '@cucumber/cucumber';
import {element} from 'detox';
import FormPage from '../../pageObjects/FormPage';
import MemberListPage from '../../pageObjects/MemberListPage';
import ShowMemberPage from '../../pageObjects/ShowMemberPage';

setDefaultTimeout(120 * 1000);

// Delete Member step
When('I delete Member number {int}', async member => {
  await MemberListPage.deleteMember(member);
});

//Edit member steps
Then('the Edit Member page is correctly displayed with:', async formData => {
  await FormPage.verifyEditMemberPage(formData.hashes()[0]);
});

// Show Member steps
Then('the Show Member page is correctly displayed with:', async formData => {
  await ShowMemberPage.verifyShowMemberPage(formData.hashes()[0]);
});

Then('I tap on the Edit Member icon', async () => {
  await ShowMemberPage.editMemberIcon.tap();
});

//Form steps
When('I fill in the form with:', async formData => {
  await FormPage.fillInForm(formData.hashes()[0]);
  await element(FormPage.formBackground).swipe('up');
  await FormPage.saveMemberButton.tap();
});

When('the Add Member page is correctly displayed', async () => {
  await FormPage.verifyAddMemberPage();
});

//Member List steps
When(
  'the Member List page is correctly displayed for {int} members',
  async membersCount => {
    console.log('🚀 ~ file: MembersSteps.js:43 ~ membersCount:', membersCount);
    await MemberListPage.verifyMemberListPage(membersCount);
  },
);

When('I tap on the Member number {int}', async memberNumber => {
  await MemberListPage.member(memberNumber).tap();
});

Then('I tap the Add Member icon', async () => {
  await MemberListPage.addMemberIcon.atIndex(0).tap();
});
