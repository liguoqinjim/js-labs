const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false})

    const page = await browser.newPage();
    await page.goto("http://134.175.152.218/get");

    var content = await page.content();
    console.log("content=" + content);

    innerText = await page.evaluate(() => {
        return JSON.parse(document.querySelector("body").innerText);
    });

    console.log("innerText now contains the JSON");
    console.log(innerText);

    await browser.close();
})()