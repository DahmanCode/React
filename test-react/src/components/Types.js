import React from 'react';
import TypeItems from './TypeItems'

function Types(){
    return(
        <div>
            <TypeItems 
                icon = "fa-brands fa-facebook"
                Comp = "Facebook"
                id = "facebook"
            />
            <TypeItems
                icon = "fa-brands fa-twitter"
                Comp = "Twitter"
                id = "twitter"
            />
            <TypeItems
                icon = "fa-brands fa-instagram"
                Comp = "Instagram"
                id = "instagram"
            />
            <TypeItems
                icon = "fa-brands fa-twitch"
                Comp = "Twitch"
                id = "twitch"
            />
        </div>
    )
}

export default Types;