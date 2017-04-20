import { ElectronNgcliPage } from './app.po';

describe('electron-ngcli App', function() {
  let page: ElectronNgcliPage;

  beforeEach(() => {
    page = new ElectronNgcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
