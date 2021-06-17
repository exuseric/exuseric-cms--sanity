export default {
	name: 'about',
	title: 'About',
	type: 'document',
	fields: [
		{
			name: 'mainImage',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true,
			}
		},
		{
			name: 'introductionTitle',
			title: 'Introduction Title',
			type: 'string'
		},
		{
			name: 'introduction',
			title: 'Introduction',
			type: 'array',
			of: [{ type: 'block' }]
		},
		{
			name: 'informationTitle',
			title: 'Information Title',
			type: 'string'
		},
		{
			name: 'information',
			title: 'Information',
			type: 'array',
			of: [{ type: 'block' }],
		}
	],
	preview: {
    select: {
      title: 'introductionTitle',
      subtitle: 'informationTitle'
    }
  }
}