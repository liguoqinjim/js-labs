const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto("http://134.175.152.218/get");

    var innerText = await page.evaluate(() => {
        return JSON.parse(document.querySelector("body").innerText);
    });
    console.log(innerText);

    //设置cookie
    page.setCookie();

    const cookies = [{
        'name': 'cookie1',
        'value': 'val1'
    }, {
        'name': 'cookie2',
        'value': 'val2'
    }, {
        'name': 'cookie3',
        'value': 'val3'
    }];

    await page.setCookie(...cookies);

    await page.reload();

    var innerText = await page.evaluate(() => {
        return JSON.parse(document.querySelector("body").innerText);
    });
    console.log(innerText);

    await browser.close();
})();