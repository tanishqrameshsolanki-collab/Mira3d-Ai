import https from 'https';

https.get('https://mira3dp.com/assets/index-Be8KF7DK.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const regex = /\/images\/[^"']+\.(png|svg|jpg|jpeg|webp)/g;
    const matches = data.match(regex);
    if (matches) {
      console.log([...new Set(matches)]);
    } else {
      console.log("No matches found.");
    }
  });
}).on('error', (e) => {
  console.error(e);
});
