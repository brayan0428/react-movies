import React from "react"

export const BackButton = () => {
    return (
        <button className="button is-info" onClick={() => window.history.back()}>Regresar</button>
    )
}