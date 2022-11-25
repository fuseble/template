import fs from 'fs';
import { Theme } from '@/styles/theme/types';

const theme: Theme = {
  INPUT: {
    default: {
      backgroundColor: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      color: 'black',
      fontSize: '14px',
    },
    error: {
      backgroundColor: 'white',
      border: '1px solid red',
      borderRadius: '4px',
      color: 'black',
      fontSize: '14px',
    },
  },
} as const;

// export const JSToCSS = (JS: any) => {
//   let cssString = '';
//   // eslint-disable-next-line guard-for-in,no-restricted-syntax
//   for (const objectKey in JS) {
//     cssString += `${objectKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)}: ${
//       JS[objectKey]
//     };\n`;
//   }
//
//   return cssString;
// };
//
// let css = '';
// Object.entries(theme).forEach(([themeKey, themeValue]) => {
//   Object.entries(themeValue).forEach(([key, value]) => {
//     if (key === 'default') {
//       css = `${css}
//       .${themeKey.toLowerCase()} {
//         ${JSToCSS(value)}
//         }`;
//     } else {
//       css = `${css}
//       .${themeKey.toLowerCase()}.${key.toLowerCase()} {
//           ${JSToCSS(value)}
//       }`;
//     }
//   });
// });
//
// export const CSS = css;

export default theme;
