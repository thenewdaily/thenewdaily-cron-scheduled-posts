/**
 * Welcome to Cloudflare Workers!
 *
 * This is a template for a Scheduled Worker: a Worker that can run on a
 * configurable interval:
 * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async scheduled(event, env, ctx) {
		if (env.WORDPRESSS_DOMAIN) {
			const timestamp = +new Date();
			const url = `${env.WORDPRESSS_DOMAIN}/wp-json/tnd/v1/scheduled-posts?t=${timestamp}`;
			const res = await fetch(url, {
				method: 'GET',
			});
			const data = await res.json();
			data.timestampVercel = timestamp;
			console.log(data);
		} else {
			console.log('⚠️ WORDPRESSS_DOMAIN not defined');
		}
	},
};
