import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !['category', 'person', 'sampleProject', 'parallaxImage', 'clientBrandLogo', 'clientFestivalLogo', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Sample projects')
        .schemaType('sampleProject')
        .child(S.documentTypeList('sampleProject').title('Sample projects')),
      S.listItem()
        .title('Parallax Image')
        .schemaType('parallaxImage')
        .child(S.documentTypeList('parallaxImage').title('Parallax Image for home page')),
      S.listItem()
        .title('Client Brand Logos')
        .schemaType('clientBrandLogo')
        .child(S.documentTypeList('clientBrandLogo').title('Client Brand Logos')),
      S.listItem()
        .title('Festival Brand Logos')
        .schemaType('clientFestivalLogo')
        .child(S.documentTypeList('clientFestivalLogo').title('Festival Brand Logos')),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
