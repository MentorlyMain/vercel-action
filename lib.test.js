const { joinDeploymentUrls, slugify } = require('./lib');

describe('slugify', () => {
  test('replaces slashes with dashes', () => {
    expect(slugify('foo/bar//baz')).toBe('foo-bar-baz');
  });
})

describe('joinDeploymentUrls', () => {
  test('adds markup to the preview url', () => {
    expect(joinDeploymentUrls("https://preview_url", [])).toBe('<https://preview_url>');
  });
  test('adds markup to the alias domains', () => {
    expect(joinDeploymentUrls("https://preview_url1", ["preview_url1"])).toBe('<https://preview_url1>\n<https://preview_url1>');
  });
  test('interpolates wildcards in alias domains', () => {
    expect(joinDeploymentUrls("https://preview_url1", ["*.preview_url1"])).toBe('<https://preview_url1>\n<https://test.preview_url1>');
  });  
})

