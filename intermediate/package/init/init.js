

const OrinoEnvironment = {
    isLocalhost: () => window.location.host.includes('localhost'),
    internalLogs: (enable = Boolean()) => window.orinoJSInternalLogs = enable
};

function InitOrinoJS() {

    // SPA URL FIX
    if (window.location.pathname.startsWith('/public/'))
        window.history.pushState({}, '', '../');
}

export { OrinoEnvironment, InitOrinoJS };