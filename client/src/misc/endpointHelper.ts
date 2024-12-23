export const getBaseEndpointUrl = () => {
    const scope: string = import.meta.env.VITE_APP_SCOPE ?? "mstore"
    return scope === "MsStore" ? "http://localhost:3001/" : "http://localhost:3002/"
}

export const getBaseIdentityUrl = () => {
    return "http://localhost:3003/connect/token"
}
