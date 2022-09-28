export default function (name) {
    return (
        Array.isArray(name) ?
            (typeof name[0] == 'string' ? name[0] : '') :
            (typeof name == 'string' ? name : '')
    );
}