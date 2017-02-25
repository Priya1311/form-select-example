import { FormSelectExamplePage } from './app.po';

describe('form-select-example App', () => {
  let page: FormSelectExamplePage;

  beforeEach(() => {
    page = new FormSelectExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
