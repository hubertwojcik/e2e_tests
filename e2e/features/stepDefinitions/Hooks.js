import {BeforeAll, Before, AfterAll, After} from '@cucumber/cucumber';
import {init, cleanup, onTestDone, onTestStart} from 'detox/internals';
import {device} from 'detox';
import testData from '../../testData/testData';
import moment from 'moment';

const date = moment().format('DD-MM-YYYY_HH-mm-ss_a');

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

  const testSummary = {
    fullName: testCase.pickle.name,
    status: 'running',
  };

  await onTestStart(testSummary);
});

After(async scenario => {
  const testSummary = {
    fullName: scenario.pickle.name,
    status: scenario.result.status.toLowerCase(),
  };
  if (scenario.result.status.toLowerCase() === 'failed') {
    const scenarioName = scenario.pickle.name.replace(/\s+/g, '-');
    await device.takeScreenshot(
      `${device.getPlatform()}_${scenarioName}_${date}`,
    );
  }
  await onTestDone(testSummary);
});

AfterAll(async () => {
  await cleanup();
});
