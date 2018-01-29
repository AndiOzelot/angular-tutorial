import { AngularTutorialPage } from './app.po';

describe('angular-tutorial App', function() {
  let page: AngularTutorialPage;

  beforeEach(() => {
    page = new AngularTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
