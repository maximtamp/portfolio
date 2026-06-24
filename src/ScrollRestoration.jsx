import { useEffect } from "react"
import { useLocation, useNavigationType } from "react-router-dom"

const scrollPositions = {}

export default function ScrollRestoration() {
    const location = useLocation()
    const navType = useNavigationType() // PUSH, POP, REPLACE

    // SAVE scroll position when leaving page
    useEffect(() => {
        return () => {
            scrollPositions[location.pathname] = window.scrollY
        }
    }, [location.pathname])

    // RESTORE scroll position
    useEffect(() => {
        if (navType === "POP") {
            const y = scrollPositions[location.pathname] || 0
            window.scrollTo({ top: y, behavior: "instant" })
        } else {
            window.scrollTo({ top: 0, behavior: "instant" })
        }
    }, [location.pathname])

    return null
}