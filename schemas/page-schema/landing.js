export default {
	name: 'landing',
	title: 'Landing Page',
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
			name: 'landingTitle',
			title: 'Landing Title',
			type: 'string'
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string'
		},
		{
			name: 'actionTitle',
			title: 'Call To Action Title',
			type: 'string'
		},
		{
			name: 'introduction',
			title: 'Introduction',
			type: 'array',
			of: [{ type: 'block' }]
		}
	],
	preview: {
    select: {
      title: 'landingTitle',
      subtitle: 'subtitle',
    }
  }
}