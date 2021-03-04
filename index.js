const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


console.log('Bem vindo ao Bot conversor 🤖');


async function robo(){
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const moedaFinal = readlineSync.question('Informe uma moeda desejada: ') || 'real';

  const qualquerUrl = `https://www.google.com/search?sxsrf=ALeKk02D3xiHANJSF9VQLKUOTdnsf_2ulw%3A1611771389598&ei=_a0RYJb_I_XZ5OUPndiRgAQ&q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjIECAAQCjoECAAQRzoGCAAQChBDOgQIABBDOggIABCxAxCDAToFCAAQsQM6BAguEEM6AggAOgcIABCxAxBDOgIILjoJCAAQsQMQChBDUP-oHVjSvR1g978daAFwBHgAgAHXAYgB0RGSAQYwLjE1LjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwjW8Yqp3LzuAhX1LLkGHR1sBEAQ4dUDCA0&uact=5`;
  await page.goto(qualquerUrl);
//   await page.screenshot({path: 'example.png'});

  const resultado = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });
 
  
 
  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)
  await browser.close();
}

robo();