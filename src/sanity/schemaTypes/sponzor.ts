import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sponzor',
  title: 'Sponzor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ime Sponzora',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Sponzora',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Vrsta Pokrovitelja',
      type: 'string',
      options: {
        list: [
          {title: 'Sponzor', value: 'sponzor'},
          {title: 'Donator', value: 'donator'},
          {title: 'Suorganizator', value: 'suorganizator'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link Na web adresu sponzora (opcionalno)',
      type: 'url',
    }),
  ],
})
