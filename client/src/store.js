import { createStore } from "redux";
import reducer from "./reducers"
import { Components } from './utils/Components'

const initialState = {
    // TODO: This props should be set with successful user login
    isAuthenticated: true,
    user: {
        name: "Pizzaboi"
    },
    // User preferences used to build personalized sections
    user_preferences: {
        countries: ["de"]
    },

    // The Home component renders the NavBar, SideBar and 
    // the component specified by this property
    // Home is renderd as first by default
    content_component: Components.HOME,

    // Array containing the list of articles divided into 
    // different sections (e.g. "Hot", "Latest"...)
    sections: [],

    // Property used to load the article preview
    current_article: {}
};

const store = createStore(reducer, initialState);

export default store;