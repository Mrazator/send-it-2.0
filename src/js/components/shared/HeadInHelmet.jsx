import * as React from 'react'
import * as PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

import * as routes from '../../constants/routes'

const convertRouteToTitle = (route) => {
    switch (route) {
        case routes.ROOT:
            return 'Channels';

        case routes.PROFILE:
            return 'Profile';

        case routes.LOGIN:
            return 'Login';

        default:
            return 'Channel';
    }
};

const HeadInHelmet = ({route}) => (
    <Helmet>
        <title>{convertRouteToTitle(route)} - send it.</title>
    </Helmet>
);

HeadInHelmet.propTypes = {
    route: PropTypes.string.isRequired,
};

export {HeadInHelmet};