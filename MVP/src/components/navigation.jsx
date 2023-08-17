import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../models";
import { DataStore, SortDirection, Predicates } from "@aws-amplify/datastore";

import SideNavigation from "@cloudscape-design/components/side-navigation";

export default function Navigation(props) {
    let navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    // handle navigation changes
    const routeChange = (path) => {
        navigate(path);
    };

    useEffect(() => {
        // Query categories for building the menu
        async function queryCategories() {
            if (categories.length === 0) {
                try {
                    const categories = await DataStore.query(Category, Predicates.ALL, {
                        sort: (c) => c.name(SortDirection.ASCENDING),
                    });
                    console.log("fetching categories");
                    setCategories(categories);
                } catch (error) {
                    console.log("Error retrieving categories", error);
                }
            }
        }

        queryCategories();
    }, [categories]);

    return (
        <SideNavigation
            activeHref={props.activeHref}
            header={{ href: "/", text: "Categories" }}
            onFollow={event => {        
                if (!event.detail.external) {          
                    event.preventDefault();
                    routeChange(event.detail.href);
                }      
            }}
            items={
                categories.map((c) => {
                    return {
                        type: "link",
                        text: c.name,
                        href: `/category/${c.name}`
                    };
                })
            }
        />
    );
}