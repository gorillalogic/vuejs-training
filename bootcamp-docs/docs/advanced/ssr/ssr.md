# Server Side Rendering - SSR

Server Side Rendering is a popular technique for rendering a SPA on the server and then sending a fully rendered page to the client.
Users get a complete page with visible content when they load the SPA, as opposed to an empty page that doesn't get populated until JavaScript runs.
The client's JavaScript bundle can then take over and the SPA can operate as normal.

SSR can also help with performance improvement because a fully loaded app is sent down from the server on the first request.

## Features

- Better SEO, as the search engine crawlers will directly see the fully rendered page.

- Faster time to render the SPA content, especially on slow internet connections or slow devices.

- More server side load, rendering a full app in Node is going to consume more CPU than just rendering static files, so if your SPA is going to have high traffic, implement caching systems or load balancer just to be prepared.

## Additional Links

[Official documentation](https://vuejs.org/v2/guide/ssr.html)
