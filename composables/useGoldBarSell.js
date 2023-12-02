const puppeteer = require("puppeteer");

async function scrapeGoldPrice() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://xn--42cah7d0cxcvbbb9x.com/");



    let element = await page.waitForSelector(
        '#divDaily > table > tbody > tr:nth-child(2) > td:nth-child(3)'
    );
    let text = await page.evaluate(element => element.textContent, element);
    console.log(text);

    await browser.close();
    return text;
}

scrapeGoldPrice();
