const {test, expect} = require('@playwright/test');

test('Client Account Login', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill("anshika@gmail.com");

    await page.locator("#userPassword").fill("Iamking@000");

    await page.locator("[value='Login']").click();

    /*wait for service call to load all the data and 
    for that use method waitForLoadState(networkidle) wait until network comes to idle state*/ 
    
    await page.waitForLoadState('networkidle');

     /* waitForLoadState('networkidle') sometimes behaves flaky. to avoid do the following step*/
    //  await page.locator(".card-body b").first().waitFor();

    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

});

