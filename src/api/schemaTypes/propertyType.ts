import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const propertyType = defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required().error('Required to list item on a page on the webite'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required().error('Required to generate a page on the webite'),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.image as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        },
      ],
    }),
    defineField({
      name: 'size_in_hectares',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Breif summary to highlight the property',
    }),
    defineField({
      name: 'description',
      type: 'array',
      description: 'Provide property information',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'price',
      description: 'Estimate cost in kenyan shillings',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'owner',
      description: 'This could be a caretaker, landlord or any other contact person',
      type: 'reference',
      to: [{type: 'owner'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'owner.client_name',
      media: 'image',
    },
  },
})
