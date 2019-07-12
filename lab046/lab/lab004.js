const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on('request', request => {
        // Override headers
        // const headers = Object.assign({}, request.headers(), {
        //     foo: 'bar', // set "foo" header
        //     origin: undefined, // remove "origin" header
        // });
        console.log("request=" + request.url());

        request.continue();
    });

    page.on("response", response => {
        console.log("response.url=" + response.url());
        // console.log("response.request=" + response.request);
        // response.request.method().then(function (value) {
        //     console.log("method=" + value);
        // });

        response.text().then(function (value) {
            console.log(value);
        });
    });

    await page.goto("http://134.175.152.218/get");
})();