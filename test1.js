console.log('[Test 1] Page Unload')

async function main() {
    console.log('[load] Current locks:', await navigator.locks.query(), '(<- should be empty)')

    if (location.href.includes('noRefresh')) {
        console.log('====== END ======')
        return;
    }


    navigator.locks.request('lock1', () => new Promise(() => {}))
    console.log('[after request] Current locks:', await navigator.locks.query())

    console.log('====== REFRESH PAGE ======')
    location.href = location.href + '?noRefresh'
}

main()

