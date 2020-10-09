import {
    SET_DASHBOARDS_FILTER_NAME,
    SET_DASHBOARDS_FILTER_OWNER,
    SET_DASHBOARDS_FILTER_ORDER,
    CLEAR_DASHBOARDS_FILTER_NAME,
} from '../reducers/dashboardsFilter'

// actions

export const acSetFilterName = value => ({
    type: SET_DASHBOARDS_FILTER_NAME,
    value,
})

export const acClearFilterName = () => ({
    type: CLEAR_DASHBOARDS_FILTER_NAME,
})

export const acSetFilterOwner = value => ({
    type: SET_DASHBOARDS_FILTER_OWNER,
    value,
})

export const acSetFilterOrder = value => ({
    type: SET_DASHBOARDS_FILTER_ORDER,
    value,
})
