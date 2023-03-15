import type { Component } from 'solid-js';

import ReloadPrompt from './pwa/ReloadPrompt';

const App: Component = () => {
    return (
        <main class={''}>
            <ReloadPrompt />
            <p>Welcome to the Solid PWA Prototype</p>
        </main>
    );
};

export default App;
