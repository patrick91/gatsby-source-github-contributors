import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Contributors = () => {
  const data = useStaticQuery(graphql`
    {
      allGitHubContributor {
        nodes {
          login
          name
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Contributors
