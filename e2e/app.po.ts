import { browser, by, element } from 'protractor';

export class AppPage {
  // Defining locators
  paragraphText = element(by.css('app-root h1'));
  skeleton1Button = element(by.buttonText('skeleton1'));
  skeleton2Button = element(by.buttonText('skeleton2'));
  homeButton = element(by.buttonText('Home'));
  _404Button = element(by.buttonText('404'));

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return this.paragraphText.getText();
  }

  getskeleton2ButtonText() {
    return this.skeleton2Button.getText();
  }

  clickButton(key) {
    switch (key) {
      case 'skeleton1': this.skeleton1Button.click();
        browser.sleep(5000);
        break;
      case 'skeleton2': this.skeleton2Button.click();
        browser.sleep(5000);
        break;
      case 'home': this.homeButton.click();
        break;
      case '404': this._404Button.click();
        break;
      default:
        break;
    }
  }
}
