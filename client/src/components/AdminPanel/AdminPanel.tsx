import React from 'react';

export const AdminPanel:  () => JSX.Element = () => {
    return <div>
        НЯ
    </div>
}

AdminPanel.meta = {
    route: "adminPanel",
    roles: ["admin"]
}