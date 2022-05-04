import React from 'react';
import TypeItems from './TypeItems'

const Types = () => {
    return(
        <div>
            <TypeItems 
                icon = "fa-brands fa-facebook"
                comp = "Facebook"
                id = "facebook"
            />
            <TypeItems
                icon = "fa-brands fa-twitter"
                comp = "Twitter"
                id = "twitter"
            />
            <TypeItems
                icon = "fa-brands fa-instagram"
                comp = "Instagram"
                id = "instagram"
            />
            <TypeItems
                icon = "fa-brands fa-twitch"
                comp = "Twitch"
                id = "twitch"
            />
        </div>
    )
}

export default Types;