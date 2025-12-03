import React, { useEffect, useRef } from "react";
import { mount as mountDashboard } from 'dashboardPage/DashboardApp'

export default () => {
    const ref = useRef(null)

    useEffect(() => {
        mountDashboard(ref.current)
    }, [])

    return (
        <div ref={ref} />
    )
}
