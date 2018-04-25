import { AppPage } from './app.po';

describe('mobinius App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to App!');
  });

  it('should display skeleton2', () => {
    // page.navigateTo();
    expect(page.getskeleton2ButtonText()).toEqual('skeleton2');
  });

  it('should navigate skeleton1 component', () => {
    // page.navigateTo();
    page.clickButton('skeleton1');
  });

  it('should navigate skeleton2 component', () => {
    // page.navigateTo();
    page.clickButton('skeleton2');
  });
});
