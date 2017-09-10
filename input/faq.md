# PidPid
## FAQ
### What are the list of scrapers offered in PidPid?
Check out the [PidPid Dashboard](https://doprdele.github.io/pidpid-dashboard/) which lists scrapers currently running and scrapers scheduled to run. This list is updated every thirty minutes, so check back often.

### How often are sites scraped?
See above.

### How do I get support?
E-mail [support@snkattck.co](support@snkattck.co) or contact us on twitter @snkattckco

### How can I report a bug?
Please submit a bug report at the [PidPid GitHub issues] page, being as detailed as possible. Good reasons to submit bug reports include, but are not limited to:

* Weird data in the index.
* PID(s) for hyped products not appearing promptly.

### How can I submit requests for new sites to be scraped?
Please submit your request at the [PidPid GitHub issues](https://github.com/doprdele/pidpid/issues) page.

### Can you / will you scrape Shopify sites?
Programmatically, scraping Shopify sites for early links isn't difficult. Simply increment a known product id by 64 in a loop for a given range. However, Shopify product ids range in the trillions and in certain situations don't increase linearly with time. Scraping Shopify sites becomes so computationally intensive that it's a waste of time. Until I can discover a more efficient way to scrape Shopify sites, no Shopify sites will be scraped in PidPid. Don't be fooled by people selling Shopify scrapers -- while they will work, you are very unlikely to find any non-live products within a reasonable amount of time. Expect to wait days to find one early link at worst, at best 12 to 24 hours if you have more than one hundred proxies to avoid rate limiting. Relying on Shopify bots is the best bet here. However, all other types of stores can be scraped. Feel free to make requests.

### Are refunds offered?
No refunds are offered, but you can cancel your subscription at anytime.

### How can I get notified when items bearing certain fields are added to an index?
Check out the [API](./api.html) documentation. We currently only support e-mail notifications, but Slack, Twitter, and Webhook notifications will be added in the future.



