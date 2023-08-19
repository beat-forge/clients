export function load({ url }) {
    return { instanceName: url.searchParams.get('ref') };
}
