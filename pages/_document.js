import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Head from 'next/head';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
          
            <link
              href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
 
                <body>
                
                <noscript
                  dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54H8XPB"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>
                    `,
                  }}
                />

                </body>

          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
