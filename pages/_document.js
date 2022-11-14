import { Html, Head, Main, NextScript } from 'next/document';

import React from 'react'

const Document = () => {
  return (
    <Html lang='ja'>
        <Head />
        <body>
            <script dangerouslySetInnerHTML={{
                __html: themeInitializerScript,
            }}></script>
        </body>
        <Main />
        <NextScript />
    </Html>
  )
}

// 即時関数で実行、変数へ格納
const themeInitializerScript = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`;

function setInitialColorMode() {

    const getInitialColorMode = () => {
        // Local Storageからthemeを取得する
        const storedPreferenceMode = window.localStorage.getItem('theme');
        
        const hasStoredPreference = typeof storedPreferenceMode === 'string';

        // 現在のPreference状態を確認する
        const preference = window.matchMedia("prefers-color-scheme: dark");
        
        if (typeof preference.matches === "boolean") {
            return preference.matches ? "dark" : "light";
        } else {
            return "light";
        }
    }

    const currentColorMode = getInitialColorMode();
    if (currentColorMode === "dark") {
        document.documentElement.setAttribute("data-theme", "dark"); // cssで色反転
    }
}

export default Document;