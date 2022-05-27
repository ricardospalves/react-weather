export const GITHUB = {
  url: 'https://github.com',
  username: 'ricardospalves',
  repository: 'react-weather',
  license: 'MIT',
  get userUrl() {
    return `${this.url}/${this.username}`
  },
  get repositoryUrl() {
    return `${this.userUrl}/${this.repository}`
  },
  get licenseUrl() {
    return `${this.repositoryUrl}/blob/main/LICENSE`
  },
}
