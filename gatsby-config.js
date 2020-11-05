/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	pathPrefix: "/hello-world",
	/* Your site config here */
	plugins: [
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-layout',
			options: {
				component: require.resolve('./src/Layout/Main'),
			},
		},
	],
};
