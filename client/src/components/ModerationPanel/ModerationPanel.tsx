import React from 'react';

export const ModerationPanel:  () => JSX.Element = () => {
    return (
        <div>
        НЯ
        </div>
    );
};

ModerationPanel.meta = {
    route: "moderationPanel",
    roles: ["admin", "moderator"]
}