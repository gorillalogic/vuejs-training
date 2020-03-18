module.exports = {
	title: 'Vue.js Bootcamp',
	dest: './dist',
	base: '/vuejs-training/',
	themeConfig: {
		repo: 'https://github.com/gorillalogic/vuejs-training/bootcamp/',
		repoLabel: 'Repo',
		docsDir: 'src',
		editLinks: false,
		logo: '/image.png',
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Get Started', link: '/intro/' }
		],
		version: '0.11.0-beta',
		sidebar: [
			'/',
			['/intro/', 'Introduction'],
			['/basics/', 'Basics'],
			{
				title: 'Routing',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					['/routing/', 'Introduction'],
					['/routing/basic-routing/basic-routing', 'Basic Routing'],
					['/routing/dynamic-routing/dynamic-routing', 'Dynamic Routing'],
					['/routing/lazy-loading/lazy-loading', 'Lazy Loading'],
				]
			},
			{
				title: 'Lifecycle',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					['/lifecycle/', 'Introduction'],
					['/lifecycle/application/application', 'Application Setup'],
					['/lifecycle/components/components', 'Components'],
					['/lifecycle/hooks/hooks', 'Lifecycle Hooks'],
				]
			},
			{
				title: 'Communication',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					['/communication/', 'Introduction'],
					['/communication/props/props', 'Props'],
					['/communication/event-emitter/event-emitter', 'Event Emitter Pattern'],
				]
			},
			{
				title: 'Vuex',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					['/stores/', 'Flux Pattern'],
					['/stores/vuex/vuex', 'Vuex'],
				]
			},
			['/testing/', 'Testing'],
			['/build/', 'Build'],
			{
				title: 'Best Practices',
				collapsable: false,
				children: [
					['/best-practices/', 'Introduction'],
					['/best-practices/components/components', 'Components'],
					['/best-practices/templates/templates', 'Templates'],
					['/best-practices/routing/routing', 'Routing'],
					['/best-practices/vuex/vuex', 'Vuex']
				]
			},
			{
				title: 'Advanced Features',
				collapsable: false,
				children: [
					['/advanced/', 'Introduction'],
					['/advanced/vue3/vue3', 'Vue 3'],
					['/advanced/configurations/configurations', 'Configurations'],
					['/advanced/plugins/plugins', 'Plugins'],
					['/advanced/mixins/mixins', 'Mixins'],
					['/advanced/animations/animations', 'Animations'],
					['/advanced/pwa/pwa', 'PWA'],
					['/advanced/ssr/ssr', 'Server Side Rendering'],
					['/advanced/nuxt/nuxt', 'Nuxt'],
					['/advanced/composition-api/composition-api', 'Composition Api'],
					['/advanced/components/components', 'Design Patterns'],
					['/advanced/typescript/typescript', 'TypeScript']
				]
			}
		]
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-92645815-3'
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://www.bencodezen.io',
				filter: frontmatter => frontmatter.date <= new Date(),
				count: 20
			}
		]
	],
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }],
		['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }],
		['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }],
		['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/apple-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/apple-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/apple-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/apple-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon-180x180.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/android-icon-192x192.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				href: '/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
};
