import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SideNavigation from "@cloudscape-design/components/side-navigation";

export default function Navigation(props) {
    
    const SIDE_NAV=[{name:"LEARNING PORTAL",link:"portal"},{name:"USER MANAGEMENT",link:"users"},{name:"ROOM",link:"room"},{name:"NOTES",link:"notes"}]
    let navigate = useNavigate();
    const [data] = useState([]);
    // handle navigation changes
    const routeChange = (path) => {
        navigate(path);
    };

    useEffect(() => {
     
    }, [data]);

    return (
        <SideNavigation
            activeHref={props.activeHref}
            header={{ href: "/", text: "Home" }}
            onFollow={event => {        
                if (!event.detail.external) {          
                    event.preventDefault();
                    routeChange(event.detail.href);
                }      
            }}
            items={
                SIDE_NAV.map((c) => {
                    return {
                        type: "link",
                        text: c.name,
                        href: `/${c.link}`
                    };
                })
            }
        />
    );
}