
let init = false;

const __OrinoEnvironment = {
    isLocalhost: () => window.location.host.includes('localhost'),
    internalLogs: (enable = Boolean()) => window.orinoJSInternalLogs = enable
};

function InitOrinoJS() {
    if (!init)
        console.log('OrinoJS > Initialized > OrinoJS Environment');
    init = true;
}

export { __OrinoEnvironment, InitOrinoJS };