export default {
    name: 'clientBrandLogo',
    type: 'document',
    title: 'Brand Logo',
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