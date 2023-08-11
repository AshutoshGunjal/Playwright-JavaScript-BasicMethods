const {test, expect} = require('@playwright/test');

test('First Playwright Browser Context Test', async ({browser}) =>
{
    // chrome - plugins/cookies
   const context = await browser.newContext(); 
   
   const page = await context.newPage();

   const userName = page.locator("#username");
   const passWord = page.locator("[type='password']");
   const signIn = page.locator("#signInBtn")
   const cardTitles = page.locator(".card-body a");

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   
   //get the title
   console.log(await page.title());

   //put assertion on the title
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

   //css selector
   await userName.type("ABC");
   
   await passWord.type("abc");
   
   await signIn.click();
   
   console.log(await page.locator("[style*='block']").textContent());
   
   //assertion on error message text 
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');

   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await passWord.fill("learning");
   await signIn.click();

//    console.log(await cardTitles.first().textContent());
//    console.log(await cardTitles.nth(1).textContent());

   const allTitles = await cardTitles.allTextContents();
   console.log(allTitles);

});



