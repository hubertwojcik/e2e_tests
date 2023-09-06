import {waitFor, expect, by, element, device} from 'detox';

import baseData from '../testData/baseData';

class Utilities {
  async sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  async typeInElement(mobileElement, text) {
    await mobileElement.replaceText(text);
    await mobileElement.tapReturnKey();
  }

  async scrollToElement(targetElement, background, pixels, direction) {
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

  async selectDatePickerDate(day, month, year) {
    if (device.getPlatform() === 'ios') {
      await element(by.id('formDatePicker')).setDatePickerDate(
        `${day}-${month}-${year}`,
        'dd-MM-yyyy',
      );
    } else {
      await element(by.type('android.widget.EditText'))
        .atIndex(2)
        .typeText(year);
      await element(by.type('android.widget.EditText'))
        .atIndex(2)
        .tapReturnKey();
      await element(by.type('android.widget.EditText'))
        .atIndex(1)
        .typeText(day);
      await element(by.type('android.widget.EditText'))
        .atIndex(1)
        .tapReturnKey();
      await element(by.type('android.widget.EditText'))
        .atIndex(0)
        .typeText(baseData.getMonth(month));
      await element(by.type('android.widget.EditText'))
        .atIndex(0)
        .tapReturnKey();
    }
  }

  async selectPickerValues(picker, value, swipeDirection) {
    if (device.getPlatform() === 'ios') {
      await picker.setColumnToValue(0, value);
    } else {
      await element(by.type('android.widget.Spinner')).tap();
      const optionsToSelect = element(
        by.type('android.widget.CheckedTextView'),
      ).atIndex(by.text(value));
      while ((await this.softElementAssertion(optionsToSelect)) === false) {
        await element(by.type('android.widget.ListView')).swipe(
          swipeDirection,
          'slow',
        );
      }
      await optionsToSelect.tap();
    }
  }

  async setTime(hours, minutes) {
    if (device.getPlatform() === 'ios') {
      await element(by.id('formBackground')).swipe('up', 'fast', 0.5);
      await element(by.id('formTimePicker')).setDatePickerDate(
        `${hours}:${minutes}`,
        'HH:mm',
      );
    } else {
      await element(
        by.label('Switch to text input mode for the time input.'),
      ).tap();
      await this.typeInElement(
        element(by.type('android.widget.EditText')).atIndex(0),
        hours,
      );
      await this.typeInElement(
        element(by.type('android.widget.EditText')).atIndex(1),
        minutes,
      );
    }
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

  async confirmPickerButton() {
    if (device.getPlatform() === 'ios') {
      await element(by.id('confirmPickerButton')).tap();
    } else {
      await element(by.text('OK')).tap();
    }
  }

  async cancelPickerButton() {
    if (device.getPlatform() === 'ios') {
      await element(by.id('cancelPickerButton')).tap();
    } else {
      await element(by.text('CANCEL')).tap();
    }
  }
}

export default new Utilities();
