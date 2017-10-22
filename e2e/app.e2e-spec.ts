import { VinylMeBasePage } from './app.po';

describe('vinyl-me-base App', () => {
  let page: VinylMeBasePage;

  beforeEach(() => {
    page = new VinylMeBasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
