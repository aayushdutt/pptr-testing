const puppeteer = require("puppeteer");
const CRX_PATH = "./Chrome";
let page;
let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false, // extensions only supported in full chrome.
    args: [
      `--disable-extensions-except=${CRX_PATH}`,
      `--load-extension=${CRX_PATH}`
    ]
  });
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});

describe("Google Maps", () => {
  const mapsUrl =
    "https://www.google.com/maps/dir/19.8208305,85.821988/19.8147322,85.8603566/@19.812352,85.8333184,15z";

  test("a div with class carbon exists", async () => {
    await page.goto(mapsUrl);
    const navbar = await page.$eval(".carbon", el => (el ? true : false));
    expect(navbar).toBe(true);
  });

  test("carbon div shows correct carbon emission data", async () => {
    await page.waitForSelector(".carbon");

    const emission = await page.evaluate(() => {
      let data;
      const dataEl = document.querySelector(".carbon");
      return dataEl.innerText;
    });

    expect(emission).toBe("1.43 kg CO2");
  }, 16000);
});
