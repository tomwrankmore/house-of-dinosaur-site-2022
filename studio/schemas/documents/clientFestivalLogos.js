export default {
    name: 'clientFestivalLogo',
    type: 'document',
    title: 'Festival Logo',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Logo image',
            type: 'figure'
        }
    ],
    preview: {
        select: {
          title: 'title',
          media: 'image'
        }
      }
  }
  