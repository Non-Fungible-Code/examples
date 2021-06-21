// Get parameters from the querystring
const query = new URLSearchParams(window.location.search);
const { minter, quote, imageUrl: imgUrl, bgc: backgroundColor, c: color } = {
  minter: query.get('minter'),
  quote: query.get('quote'),
  imageUrl: query.get('imageUrl'),
  bgc: query.get('bgc') || '#000000',
  c: query.get('c') || '#ffffff' };


// Change the NFT according to the parameters
const minterElem = document.querySelector('#minter');
minterElem.innerText = `${minter.slice(0, 6)}...${minter.slice(minter.length - 4)}`;

const quoteElem = document.querySelector('#quote');
quoteElem.innerText = quote;
quoteElem.style.color = color;

const img = document.querySelector('#image');
img.src = imgUrl;

const containerElem = document.querySelector('#container');
containerElem.style.backgroundColor = backgroundColor;