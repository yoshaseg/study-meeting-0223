import {PropTypes} from 'react';

export const todoShape = {
    id: PropTypes.number,
    task: PropTypes.string,
    mode: PropTypes.oneOf(["show", "edit"]),
    status: PropTypes.oneOf(["deleted", "active", "done"]),
};

export const filterStateShape = PropTypes.oneOf(["all", "active", "done"]);