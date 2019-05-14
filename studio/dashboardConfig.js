export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5cdb2dbd5763259f91632396',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9euhn7zv',
                  apiId: '5e696bbb-8eee-4c36-92d1-a68b4650a50e'
                },
                {
                  buildHookId: '5cdb2dbd91a0027290e86fb2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ua28hhha',
                  apiId: '19531f4f-0dbd-4664-b367-c4966e53cc0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vdmokstati/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-ua28hhha.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
