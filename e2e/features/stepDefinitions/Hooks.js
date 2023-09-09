import {
  BeforeAll,
  Before,
  AfterStep,
  After,
  AfterAll,
} from '@cucumber/cucumber';
import {device} from 'detox';
import {init, onTestStart, onTestDone, cleanup} from 'detox/internals';
import testData from '../../testData/TestData';

import moment from 'moment';
import replace from 'replace-in-file';
import ReportGeneration from '../../helpers/ReportGeneration';
import Utilities from '../../helpers/Utilities';

const date = moment().format('DD-MM-YYY_HH-mm-ss_a');
let executionStart;

BeforeAll({timeout: 60 * 1000}, async () => {
  executionStart = moment();
  await init();
});

Before(async testCase => {
  let instanceBoolean = true;
  for (let i = 0; i < testCase.pickle.tags.length; i++) {
    let tag = testCase.pickle.tags[i].name;
    if (
      tag === '@addmembers' ||
      testData.getLastTag() === '@addmembers' ||
      tag === '@editmembers' ||
      testData.getLastTag() === '@editmembers'
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

AfterStep(async function (step) {
  if (step.result.status === 'FAILED') {
    const stepName = step.pickleStep.text.replace(/\s+/g, '-');
    await this.attach(
      await Utilities.takeScreenshotStream(
        `${device.getPlatform()}_${stepName}_${date}`,
      ),
      'image/png',
    );
  }
});

After(async scenario => {
  const testSummary = {
    fullName: scenario.pickle.name,
    status: scenario.result.status.toLowerCase(),
  };

  await onTestDone(testSummary);
});

AfterAll(async () => {
  const deviceOS = device.getPlatform();
  await cleanup();
  const executionEnd = moment();

  const options = {
    files: 'e2e/Gulpfile.js',
    from: /reporter\.generate\(.*\)/g,
    to: `reporter.generate(${ReportGeneration.getReportValues(
      deviceOS,
      executionStart,
      executionEnd,
    )})`,
  };

  await replace(options);
});
