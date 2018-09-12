import { HfdutyPage } from './app.po';

describe('hfduty App', () => {
  let page: HfdutyPage;

  beforeEach(() => {
    page = new HfdutyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
