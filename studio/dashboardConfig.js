export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
    //   }
    // },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a35cf10bb66458a4aa859b',
                  title: 'Sanity Studio',
                  name: 'house-of-dinosaur-site-2022-studio',
                  apiId: '0dffb5bb-94e1-4086-a03a-34acee7bd830'
                },
                {
                  buildHookId: '62a35cf13d7f82577aa1cc4f',
                  title: 'Portfolio Website',
                  name: 'house-of-dinosaur-site-2022',
                  apiId: '0d2f8012-9991-4e99-86d7-240666d343a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomwrankmore/house-of-dinosaur-site-2022',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://house-of-dinosaur-site-2022.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
