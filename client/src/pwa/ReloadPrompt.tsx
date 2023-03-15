import type { JSXElement } from 'solid-js'
import { Show } from 'solid-js'
import { useRegisterSW } from 'virtual:pwa-register/solid'
import styles from './ReloadPrompt.module.css'

export default function(): JSXElement {
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            // eslint-disable-next-line prefer-template
            console.info('SW Registered: ' + r)
        },
        onRegisterError(error) {
            console.error('SW registration error', error)
        },
    })

    const close = () => {
        setOfflineReady(false)
        setNeedRefresh(false)
    }

    return (
        <div class={'p-0 m-0 w-0 h-0'}>
            <Show when={offlineReady() || needRefresh()}>
                <div class={'fixed right-0 bottom-0 m-4 p-3 border border-neutral-500/30 rounded z-10 text-left shadow-md shadow-neutral-500/30 bg-white'}>
                    <div class={'mb-2'}>
                        <Show
                            fallback={<span>New content available, click on reload button to update.</span>}
                            when={offlineReady()}
                        >
                            <span>App ready to work offline</span>
                        </Show>
                    </div>
                    <Show when={needRefresh()}>
                        <button class={'border border-neutral-500/30 outline-none mr-1 border-sm py-1 px-3'} onClick={() => updateServiceWorker(true)}>Reload</button>
                    </Show>
                    <button class={'border border-neutral-500/30 outline-none mr-1 border-sm py-1 px-3'} onClick={() => close()}>Close</button>
                </div>
            </Show>
        </div>
    )
}

