/* eslint-disable react/prop-types */
const PrintThisComponent = ({ componentRef, message }) => {

    return (
        <div ref={componentRef}>
            <h2>Print This Component</h2>
            <p>{message}</p>
        </div>
    )
}

export default PrintThisComponent