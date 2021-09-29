function domainToUrl(domain) {
  return `https://${domain.replace(/\*/, 'test')}`
}

function joinDeploymentUrls(deploymentUrl, aliasDomains) {
  let urls = [deploymentUrl]
  if (aliasDomains.length) {
    const aliasUrls = aliasDomains.map(domainToUrl);
    urls = [deploymentUrl, ...aliasUrls];
  }
  return urls.map(url => `<${url}>`).join('\n');
}

function slugify(str) {
  const slug = str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\//g, '-')
    .replace(/[_\s]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
  return slug;
}

module.exports = { joinDeploymentUrls, slugify };
