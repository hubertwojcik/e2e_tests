import {expect, element, by} from 'detox';
import assert from 'chai';
class CountersPage {
  get waterCounterText() {
    return element(by.id('counterButtonText-water'));
  }

  get waterCounterTotal() {
    return element(by.id('counterTotal-water'));
  }

  get electricityCounterText() {
    return element(by.id('counterButtonText-electricity'));
  }

  get electricityCounterTotal() {
    return element(by.id('counterTotal-electricity'));
  }

  get gasCounterText() {
    return element(by.id('counterButtonText-gas'));
  }

  get gasCounterTotal() {
    return element(by.id('counterTotal-gas'));
  }

  get broadbandCounterText() {
    return element(by.id('counterButtonText-broadband'));
  }

  get broadbandCounterTotal() {
    return element(by.id('counterTotal-broadband'));
  }

  // fucnction used in encapsulations
  async verifyCountersPage() {
    await expect(this.waterCounterText).toHaveText('WATER COUNTER');
    await expect(this.waterCounterTotal).toHaveText('0');
    await expect(this.electricityCounterText).toHaveText('ELECTRICITY COUNTER');
    await expect(this.electricityCounterTotal).toHaveText('0');
    await expect(this.gasCounterText).toHaveText('GAS COUNTER');
    await expect(this.gasCounterTotal).toHaveText('0');
    await expect(this.broadbandCounterText).toHaveText('BROADBAND COUNTER');
    await expect(this.broadbandCounterTotal).toHaveText('0');
  }

  async tapCounter(counter, tapsNumber) {
    switch (counter) {
      case 'Water':
        await this.waterCounterText.multiTap(tapsNumber);
        await expect(this.waterCounterTotal).toHaveText(String(tapsNumber));
        break;
      case 'Electricity':
        await this.electricityCounterText.multiTap(tapsNumber);
        await expect(this.electricityCounterTotal).toHaveText(
          String(tapsNumber),
        );
        break;
      case 'Gas':
        await this.gasCounterText.multiTap(tapsNumber);
        await expect(this.gasCounterTotal).toHaveText(String(tapsNumber));
        break;
      case 'Broadband':
        await this.broadbandCounterText.multiTap(tapsNumber);
        await expect(this.broadbandCounterTotal).toHaveText(String(tapsNumber));
        break;
      default:
        assert.fail(`The entered counter ${counter} is an invalid counter`);
        break;
    }
  }
}

export default new CountersPage();
