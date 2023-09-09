import {waitFor, expect, device} from 'detox';
import {copyFile as _copyFile, createReadStream} from 'fs-extra';
import tempfile from 'tempfile';
import {promisify} from 'util';

const copyFile = promisify(_copyFile);
class Utilities {
  async sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  async typeInElement(mobileElement, text) {
    await device.disableSynchronization();
    await mobileElement.replaceText(text);
    await mobileElement.tapReturnKey();
    await device.enableSynchronization();
  }

  async scrollToElement(targetElement, background, pixels, direction) {
    await waitFor(targetElement)
      .toBeVisible()
      .whileElement(background)
      .scroll(pixels, direction, direction === 'left' ? 0.25 : NaN);
  }

  async softElementAssertion(mobileElement) {
    try {
      await expect(mobileElement).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

  async softTextAssertion(mobileElement, text) {
    try {
      await expect(mobileElement).toHaveText(text);
      return true;
    } catch {
      return false;
    }
  }

  async getElementText(mobileElement) {
    const attributes = await mobileElement.getAttributes();
    return attributes.text;
  }

  async takeScreenshotStream(screenshotName) {
    const imagePath = await device.takeScreenshot(screenshotName);
    const persistedImagePath = tempfile('.png');
    await copyFile(imagePath, persistedImagePath);
    return createReadStream(persistedImagePath);
  }
}

export default new Utilities();
