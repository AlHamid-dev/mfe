import React, { useEffect, useRef } from "react";
import { mount as mountAuth } from 'authPage/AuthApp'
import { useHistory } from 'react-router-dom'

export default ({onSignIn}) => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mountAuth(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location
                console.log(nextPathname)
                if (pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            },
            onSignIn
        })
        history.listen(onParentNavigate)
    }, [])

    return (
        <div ref={ref} />
    )
}
