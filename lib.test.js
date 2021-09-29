const { joinDeploymentUrls, slugify } = require('./lib');

describe('slugify', () => {
  test('replaces slashes with dashes', () => {
    expect(slugify('feature/WEB-2088-improve-deploy')).toBe('feature-web-2088-improve-deploy');
  });
})

describe('joinDeploymentUrls', () => {
  test('adds markup to the preview url', () => {
    expect(joinDeploymentUrls("https://preview_url", [])).toBe('<https://preview_url>');
  });
  test('adds markup to the alias domains', () => {
    expect(joinDeploymentUrls("https://preview_url1", ["preview_url1"])).toBe('<https://preview_url1>');
  });
  test('interpolates wildcards in alias domains', () => {
    expect(joinDeploymentUrls("https://preview_url1", ["*.preview_url1"])).toBe('<https://test.preview_url1>');
  });  
})

