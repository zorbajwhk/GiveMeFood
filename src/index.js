import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import PWAPrompt from 'react-ios-pwa-prompt';
import register from './serviceWorker';

console.log(`Oh wow! You sure do like reading stuff that normal people don't!`);
console.log(`Hi! I'm the creator of this App. My name is Zorba J. Wong.`);
console.log(`Anyone who unlocks this message are people I'd love to make friends with!`);
console.log(`Why not connect with me on LinkedIn? Just click on my name within the footer for the page.`);
console.log(`Drop me a message to let me know you found this easter egg! :)`);

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<PWAPrompt
                timesToShow={3}
                delay={1000}
                promptOnVisit={1}
                copyTitle="Webアプリ版をインストールしませんか？"
                copyBody="簡単でホーム画面に追加して、便利でご利用できるようになります。＊Safariでなさってください。"
                copyShareButtonLabel="1)「シェア」ボタンをお押しください。"
                copyAddHomeButtonLabel="2)「ホーム画面に追加する」ボタンをお押しください。"
                copyClosePrompt="閉める"
                permanentlyHideOnDismiss={false}
                />, document.getElementById('iOS-promp'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
register();