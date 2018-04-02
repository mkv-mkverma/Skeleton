import { Skeleton2DetailsPage } from '../page/skeleton2-details.po';

describe('Skeleton2DetailsPage', () => {
  let page: Skeleton2DetailsPage;

  beforeEach(() => {
    page = new Skeleton2DetailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to App!');
  });
});
