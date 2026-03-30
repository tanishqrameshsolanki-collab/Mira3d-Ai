import https from 'https';

const urls = [
  'https://mira3dp.com/images/product_miraprowhite.png',
  'https://mira3dp.com/images/product_miramaxwhite.png',
  'https://mira3dp.com/images/ProductsMirapro.png',
  'https://mira3dp.com/images/ProductsMiramax.png',
  'https://mira3dp.com/images/product_mirapro.png',
  'https://mira3dp.com/images/product_miramax.png',
  'https://mira3dp.com/images/MiraPro.png',
  'https://mira3dp.com/images/MiraMax.png',
  'https://mira3dp.com/images/product_miranalysewhite.png',
  'https://mira3dp.com/images/ProductsMirakar.png'
];

urls.forEach(url => {
  const req = https.get(url, (res) => {
    console.log(`${url}: ${res.statusCode} - ${res.headers['content-type']} - ${res.headers['content-length']}`);
  }).on('error', (e) => {
    console.error(`Error fetching ${url}:`, e.message);
  });
  req.setTimeout(5000, () => {
    req.destroy();
  });
});
