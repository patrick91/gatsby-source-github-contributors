# gatsby-source-github-contributors

[![npm](https://img.shields.io/npm/v/gatsby-source-github-contributors/latest.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-source-github-contributors)

A Gatsby source plugin for pulling all the contributors for a github repository.

## Install

via npm

`npm install --save gatsby-source-github-contributors`

or via yarn

`yarn add gatsby-source-github-contributors`

## Example

Getting data from two different tables:

```javascript
// In gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-github-contributors`,
    options: {
      repo: "strawberry-graphql/strawberry"
    }
  }
];
```

Get all the contributors via GraphQL

```
{
    allGitHubContributor {
        nodes {
            login
            name
            url
        }
    }
}
```

### API Keys

This source doesn't require API keys but, since GitHub throttles requests, it is
recommended to use a token or app credentials.

#### Using a token

```javascript
// In gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-github-contributors`,
    options: {
      repo: "strawberry-graphql/strawberry",
      token: process.env.GITHUB_TOKEN
    }
  }
];
```

For more authentication options, refer to
[github-base docs.](https://github.com/jonschlinkert/github-base#authentication)
