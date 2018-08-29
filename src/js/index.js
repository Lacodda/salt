import '../scss/main.scss';
/* eslint-disable-next-line */
import salt from '../assets/images/salt.svg';

// Import all svg icons from assets/svg
const req = require.context('../assets/svg', true, /\.svg$/);
req.keys().forEach(key => req(key));

if (process.env.NODE_ENV === 'production') {
  console.log('production');
}

if (process.env.NODE_ENV === 'development') {
  console.log('development');
}

function ready() {
  console.info('Page loaded');
}

document.addEventListener('DOMContentLoaded', ready);
