export const getBaseEndpointUrl = () => {
    const scope: string = import.meta.env.VITE_APP_SCOPE ?? "MsStore"
    return scope === "MsStore" ? "http://localhost:5001/" : "http://localhost:5002/"
}

export const getBaseGamerEndpointUrl = () =>  "http://localhost:5002/"

export const getBaseMusicEndpointUrl = () =>  "http://localhost:5001/"

export const getBaseIdentityUrl = () => {
    return "http://localhost:5000/connect/token"
}
