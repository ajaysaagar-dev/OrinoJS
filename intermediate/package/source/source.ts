
export default function __source<Path extends string>(path: Path) {
    if (path.startsWith('http'))
        return path;
    else if (path.startsWith('/'))
        return `./../source${path}`;
    else
        return `./../source/${path}`;
}