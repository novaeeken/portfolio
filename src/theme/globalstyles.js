import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Brandon Text', sans-serif;
  }

    /* @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-BoldItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-BlackItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-BlackItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-MediumItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-MediumItalic.woff') format('woff');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Black.woff2') format('woff2'),
      url('./fonts/BrandonText-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Regular.woff2') format('woff2'),
      url('./fonts/BrandonText-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Bold.woff2') format('woff2'),
      url('./fonts/BrandonText-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Bold.woff2') format('woff2'),
      url('./fonts/BrandonText-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-ThinItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-ThinItalic.woff') format('woff');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Medium.woff2') format('woff2'),
      url('./fonts/BrandonText-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-LightItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Light.woff2') format('woff2'),
      url('./fonts/BrandonText-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-ThinItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-ThinItalic.woff') format('woff');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Thin.woff2') format('woff2'),
      url('./fonts/BrandonText-Thin.woff') format('woff');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-BlackItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-BlackItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Medium.woff2') format('woff2'),
      url('./fonts/BrandonText-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Thin.woff2') format('woff2'),
      url('./fonts/BrandonText-Thin.woff') format('woff');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-LightItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-MediumItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-MediumItalic.woff') format('woff');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Light.woff2') format('woff2'),
      url('./fonts/BrandonText-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-BoldItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Black.woff2') format('woff2'),
      url('./fonts/BrandonText-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-RegularItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-RegularItalic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-Regular.woff2') format('woff2'),
      url('./fonts/BrandonText-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url('./fonts/BrandonText-RegularItalic.woff2') format('woff2'),
      url('./fonts/BrandonText-RegularItalic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
    } */
    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-BoldItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-BoldItalic.woff) format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-BlackItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-BlackItalic.woff) format('woff');
      font-weight: 900;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-MediumItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-MediumItalic.woff) format('woff');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Black.woff2) format('woff2'),
      url(./fonts/BrandonText-Black.woff) format('woff');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Regular.woff2) format('woff2'),
      url(./fonts/BrandonText-Regular.woff) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Bold.woff2) format('woff2'),
      url(./fonts/BrandonText-Bold.woff) format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Bold.woff2) format('woff2'),
      url(./fonts/BrandonText-Bold.woff) format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-ThinItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-ThinItalic.woff) format('woff');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Medium.woff2) format('woff2'),
      url(./fonts/BrandonText-Medium.woff) format('woff');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-LightItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-LightItalic.woff) format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Light.woff2) format('woff2'),
      url(./fonts/BrandonText-Light.woff) format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-ThinItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-ThinItalic.woff) format('woff');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Thin.woff2) format('woff2'),
      url(./fonts/BrandonText-Thin.woff) format('woff');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-BlackItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-BlackItalic.woff) format('woff');
      font-weight: 900;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Medium.woff2) format('woff2'),
      url(./fonts/BrandonText-Medium.woff) format('woff');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Thin.woff2) format('woff2'),
      url(./fonts/BrandonText-Thin.woff) format('woff');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-LightItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-LightItalic.woff) format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-MediumItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-MediumItalic.woff) format('woff');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Light.woff2) format('woff2'),
      url(./fonts/BrandonText-Light.woff) format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-BoldItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-BoldItalic.woff) format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Black.woff2) format('woff2'),
      url(./fonts/BrandonText-Black.woff) format('woff');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-RegularItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-RegularItalic.woff) format('woff');
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-Regular.woff2) format('woff2'),
      url(./fonts/BrandonText-Regular.woff) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: local('Brandon Text'), local('BrandonText'),
      url(./fonts/BrandonText-RegularItalic.woff2) format('woff2'),
      url(./fonts/BrandonText-RegularItalic.woff) format('woff');
      font-weight: normal;
      font-style: italic;
    }
`
