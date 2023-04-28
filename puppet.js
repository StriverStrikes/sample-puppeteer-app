const puppeteer = require('puppeteer')

async function script() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        ignoreDefaultArgs: ["--enable-automation"],
        args: [
            '--disable-gpu',
            '--start-maximized',
            '--window-size=1600,900'
        ],
    });

    const page = await browser.newPage();

    await page.goto('https://google.com');
    console.log('page opened successfully');
    await page.screenshot({ path: __dirname + '/screenshot.png' });
    console.log('screen shot captured');
    browser.close();
}

script();
