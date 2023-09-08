import {BeforeAll, Before, AfterAll} from '@cucumber/cucumber';
import {init, cleanup} from 'detox/internals';
import {device} from 'detox';
import testData from '../../testData/testData';

BeforeAll({timeout: 60 * 1000}, async () => {
  await init();
});

Before(async testCase => {
  let instanceBoolean = true;
  for (let i = 0; i < testCase.pickle.tags.length; i++) {
    let tag = testCase.pickle.tags[i].name;
    if (
      (tag === '@addmembers' && testData.getLastTag() === '@addmembers') ||
      (tag === '@editmembers' && testData.getLastTag() === '@editmembers')
    ) {
      instanceBoolean = false;
    } else if (tag === '@addmembers' || tag === '@editmembers') {
      testData.setLastTag(tag);
    }
  }
  await device.launchApp({delete: instanceBoolean, newInstance: true});
});

AfterAll(async () => {
  await cleanup();
});
