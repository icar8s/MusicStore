import React from 'react';

export const Home:  () => JSX.Element = () => {
    return (
        <div>
            НЯ
        </div>
    );
};

Home.meta = {
    route: "home",
    roles: ["admin", "moderator"],
};