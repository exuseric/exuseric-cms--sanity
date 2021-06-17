export default {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	fields: [
		{
			name: 'coverImage',
			title: 'Cover Image',
			type: 'image',
			options: {
				hotspot: true,
			}
		},
		{
			name: 'title',
			title: 'Project Title',
			type: 'string',
		},
		{
			name: 'subtitle',
			title: 'Project Tag Line',
			type: 'string'
		},
		{
			name: 'techStack',
			title: 'Tech Stack',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{type: 'technologyStack'}]
				}
			],
			options: {
				layout: 'tags',
			}
		},
		{
			name: 'description',
			title: 'Project Description',
			type: 'array',
			of: [{type: 'block'}],
		}
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'subtitle',
			image: 'projects.coverImage',
		}
	}
}