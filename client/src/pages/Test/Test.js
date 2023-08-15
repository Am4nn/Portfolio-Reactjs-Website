import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Test = () => {
    const ref = useRef(null)

    return (
        <div style={{ marginTop: "5rem" }}>
            <LoadingBar ref={ref} />
            <button onClick={() => ref.current.continuousStart()}>
                Start Continuous Loading Bar
            </button>
            <button onClick={() => ref.current.staticStart()}>
                Start Static Loading Bar
            </button>
            <button onClick={() => ref.current.complete()}>
                Complete
            </button>
            <br />
        </div>
    )
}

export default Test;
