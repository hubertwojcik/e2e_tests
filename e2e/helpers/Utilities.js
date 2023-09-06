import {waitFor, expect, by, element} from 'detox';

class Utilities {
  async sleep(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
  }

  async typeInElement(mobileElement, text) {
    await mobileElement.replaceText(text);
    await mobileElement.tapReturnKey();
  }

  async scrollToElement(targetElement, background, pixels, direction, edge) {
    if (direction === 'left' || direction === 'right') {
      await this.scrollHorizontallyToElement(
        element(background),
        direction,
        targetElement,
      );
    } else {
      await waitFor(targetElement)
        .toBeVisible()
        .whileElement(background)
        .scroll(
          pixels,
          direction,
          direction === 'up' || direction === 'down' ? 0.98 : NaN,
        );
    }
  }

  async scrollHorizontallyToElement(background, direction, targetElement) {
    while ((await this.softElementAssertion(targetElement)) === false) {
      const scrollDirection = direction === 'left' ? 'right' : 'left';
      await background.swipe(scrollDirection, 'slow', 0.5);
    }
  }
  async selectCalendarDate(weekday, day, month, year) {
    while (
      (await this.softTextAssertion(
        element(by.id('undefined.header.title')),
        `${month} ${year}`,
      )) === false
    ) {
      await element(by.id('undefined.header.rightArrow')).tap();
    }
    await element(by.label(` ${weekday} ${day} ${month} ${year} `))
      .atIndex(0)
      .tap();
  }

  async softElementAssertion(mobileElement) {
    try {
      await expect(mobileElement).toBeVisible();
      return true;
    } catch (error) {
      return false;
    }
  }

  async softTextAssertion(mobileElement, text) {
    try {
      await expect(mobileElement).toHaveText(text);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default new Utilities();
