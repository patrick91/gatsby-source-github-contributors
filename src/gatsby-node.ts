import camelcaseKeys from "camelcase-keys";
import GitHub from "github-base";

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest }: any,
  options: any
) => {
  const github = new GitHub(options);

  const contributors: any[] = (await github
    .paged(`/repos/:${options.repo}/contributors`)
    .then((res: any) => res.pages))
    .flat()
    .map((page: any) => page.body)
    .flat();
  const logins: string[] = contributors.map(node => node.login);

  const profiles = await Promise.all(
    logins.map(login =>
      github.get(`/users/${login}`).then((res: any) => res.body)
    )
  );

  const loginToProfile = Object.fromEntries(
    profiles.map(profile => [profile.login, profile])
  );

  contributors.forEach(node => {
    const profile = loginToProfile[node.login];

    return actions.createNode({
      ...camelcaseKeys(node),
      name: profile.name,
      url: profile.blog || profile.html_url,
      id: createNodeId(node.id),
      internal: {
        type: "GitHubContributor",
        contentDigest: createContentDigest('' + node.id)
      }
    });
  });
};
