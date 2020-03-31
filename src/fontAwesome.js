// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faStar as faOpenStar } from '@fortawesome/free-regular-svg-icons'; // regular
import { faSignOutAlt, faImages, faUserEdit, faStar } from '@fortawesome/free-solid-svg-icons' // solid
import {faGithub} from '@fortawesome/free-brands-svg-icons' // brand

library.add(
    faGithub,
    faSignOutAlt,
    faImages,
    faUserEdit,
    faStar,
    faOpenStar,
);