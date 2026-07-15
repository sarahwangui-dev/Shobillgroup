import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const propertyOwnerType = defineType({
  name: 'owner',
  title: 'Owner',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'client_name',
      type: 'string',
      validation: (rule) => rule.required().error('Required to list item on a page on the webite'),
    }),
    defineField({
      name: 'phone_number',
      type: 'number',
      validation: (rule) => rule.required().min(10).error('Invalid phone number'),
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (rule) => rule.required().lowercase(),
    }),
    defineField({
      name: 'address',
      type: 'string',
    }),
    defineField({
      name: 'city',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'client_name', subtitle: 'phone_number'},
  },
})
