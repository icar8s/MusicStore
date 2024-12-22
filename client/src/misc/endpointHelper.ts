export const getBaseEndpointUrl = () => {
    const scope: string = import.meta.env.VITE_APP_SCOPE ?? "mstore"
    return scope === "mstore" ? "http://localhost:5001/" : "http://localhost:5002/"
}

export const getBaseIdentityUrl = () => {
    return "http://localhost:3003/"
}
