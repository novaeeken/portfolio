import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-ExtraBoldItalic.woff2') format('woff2'), url('fonts/OpenSans-ExtraBoldItalic.woff') format('woff');
      font-weight: 800;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-BoldItalic.woff2') format('woff2'), url('fonts/OpenSans-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Regular.woff2') format('woff2'), url('fonts/OpenSans-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Italic.woff2') format('woff2'), url('fonts/OpenSans-Italic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Regular.woff2') format('woff2'), url('fonts/OpenSans-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-SemiBold.woff2') format('woff2'), url('fonts/OpenSans-SemiBold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-BoldItalic.woff2') format('woff2'), url('fonts/OpenSans-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Light.woff2') format('woff2'), url('fonts/OpenSans-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Italic.woff2') format('woff2'), url('fonts/OpenSans-Italic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-ExtraBoldItalic.woff2') format('woff2'), url('fonts/OpenSans-ExtraBoldItalic.woff') format('woff');
      font-weight: 800;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-SemiBold.woff2') format('woff2'), url('fonts/OpenSans-SemiBold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Regular.woff2') format('woff2'), url('fonts/OpenSans-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-BoldItalic.woff2') format('woff2'), url('fonts/OpenSans-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-SemiBoldItalic.woff2') format('woff2'), url('fonts/OpenSans-SemiBoldItalic.woff') format('woff');
      font-weight: 600;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Italic.woff2') format('woff2'), url('fonts/OpenSans-Italic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Bold.woff2') format('woff2'), url('fonts/OpenSans-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-LightItalic.woff2') format('woff2'), url('fonts/OpenSans-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-ExtraBold.woff2') format('woff2'), url('fonts/OpenSans-ExtraBold.woff') format('woff');
      font-weight: 800;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-SemiBoldItalic.woff2') format('woff2'), url('fonts/OpenSans-SemiBoldItalic.woff') format('woff');
      font-weight: 600;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-ExtraBold.woff2') format('woff2'), url('fonts/OpenSans-ExtraBold.woff') format('woff');
      font-weight: 800;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-LightItalic.woff2') format('woff2'), url('fonts/OpenSans-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Light.woff2') format('woff2'), url('fonts/OpenSans-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-SemiBoldItalic.woff2') format('woff2'), url('fonts/OpenSans-SemiBoldItalic.woff') format('woff');
      font-weight: 600;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Bold.woff2') format('woff2'), url('fonts/OpenSans-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Light.woff2') format('woff2'), url('fonts/OpenSans-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-SemiBold.woff2') format('woff2'), url('fonts/OpenSans-SemiBold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-ExtraBoldItalic.woff2') format('woff2'), url('fonts/OpenSans-ExtraBoldItalic.woff') format('woff');
      font-weight: 800;
      font-style: italic;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-ExtraBold.woff2') format('woff2'), url('fonts/OpenSans-ExtraBold.woff') format('woff');
      font-weight: 800;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-Bold.woff2') format('woff2'), url('fonts/OpenSans-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('fonts/OpenSans-LightItalic.woff2') format('woff2'), url('fonts/OpenSans-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-BoldItalic.woff2') format('woff2'), url('fonts/BrandonText-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-BlackItalic.woff2') format('woff2'), url('fonts/BrandonText-BlackItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-MediumItalic.woff2') format('woff2'), url('fonts/BrandonText-MediumItalic.woff') format('woff');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Black.woff2') format('woff2'), url('fonts/BrandonText-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Regular.woff2') format('woff2'), url('fonts/BrandonText-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Bold.woff2') format('woff2'), url('fonts/BrandonText-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Bold.woff2') format('woff2'), url('fonts/BrandonText-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-ThinItalic.woff2') format('woff2'), url('fonts/BrandonText-ThinItalic.woff') format('woff');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Medium.woff2') format('woff2'), url('fonts/BrandonText-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-LightItalic.woff2') format('woff2'), url('fonts/BrandonText-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Light.woff2') format('woff2'), url('fonts/BrandonText-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-ThinItalic.woff2') format('woff2'), url('fonts/BrandonText-ThinItalic.woff') format('woff');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Thin.woff2') format('woff2'), url('fonts/BrandonText-Thin.woff') format('woff');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-BlackItalic.woff2') format('woff2'), url('fonts/BrandonText-BlackItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Medium.woff2') format('woff2'), url('fonts/BrandonText-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Thin.woff2') format('woff2'), url('fonts/BrandonText-Thin.woff') format('woff');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-LightItalic.woff2') format('woff2'), url('fonts/BrandonText-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-MediumItalic.woff2') format('woff2'), url('fonts/BrandonText-MediumItalic.woff') format('woff');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Light.woff2') format('woff2'), url('fonts/BrandonText-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-BoldItalic.woff2') format('woff2'), url('fonts/BrandonText-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Black.woff2') format('woff2'), url('fonts/BrandonText-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-RegularItalic.woff2') format('woff2'), url('fonts/BrandonText-RegularItalic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-Regular.woff2') format('woff2'), url('fonts/BrandonText-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Brandon Text';
      src: url('fonts/BrandonText-RegularItalic.woff2') format('woff2'), url('fonts/BrandonText-RegularItalic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
    }
    font-family: 'Brandon Text', sans-serif;
  }
`
