import { lazy } from 'solid-js'
import { createStore } from 'solid-js/store'
import type { JSXElement } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import ReloadPrompt from './pwa/ReloadPrompt';
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Profile = lazy(() => import("./pages/Profile"));

export const [user, setUser] = createStore({name: 'Foo'})

export default function App(): JSXElement {
    return <>
        <main>
            <ReloadPrompt />
            <h1>Welcome to the Solid PWA Prototype</h1>
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/about" element={About} />
                <Route path="/profile" element={Profile} />
            </Routes>
        </main>
    </>
}

