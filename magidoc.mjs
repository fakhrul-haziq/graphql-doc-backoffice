export default {
  introspection: {
    type: "sdl",
    paths: ["./schema.graphql"],
  },
  website: {
    template: "carbon-multi-page",
    options: {
      appTitle: "Medium Article",
      appLogo:
        "https://asset.brandfetch.io/idPF9SmwKn/id3BcGnhTM.png?updated=1703746251335",
      pages: [
        {
          title: "Graphql Documentation",
          content: `
# omni-onboarding-backoffice-be
This is Graphql Documentation for omni-onboarding-backoffice-be
## Where to go next?
- Star the project on [GitHub](https://github.com/magidoc-org/magidoc) 
- Read the [documentation](https://magidoc.js.org/introduction/welcome)
`,
        },
      ],
    },
  },
};
