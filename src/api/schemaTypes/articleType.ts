import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  icon: DocumentTextIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A slug is required for the article to show up in the preview',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'Content goes here',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    // defineField({
    //   name: 'coverImage',
    //   title: 'Cover Image',
    //   type: 'image',
    //   fields: [
    //     {
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative text',
    //       description: 'Important for SEO and accessibility.',
    //       validation: (rule) => {
    //         // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
    //         return rule.custom((alt, context) => {
    //           if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
    //             return 'Required'
    //           }
    //           return true
    //         })
    //       },
    //     },
    //   ],
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Optional category for the article (e.g., Technology, Health, etc.)',
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'Attach a PDF file related to this article',
    }),
  ],
})
