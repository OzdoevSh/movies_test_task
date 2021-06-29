import './Pagination.css'

function Pagination(props) {
    if (props.page > 1) {
        return (
            <div className="pagination">
                <a onClick={props.prevPage}>«</a>
                <a>{props.page}</a>
                <a onClick={props.nextPage}>»</a>
            </div>
        )
    } else {
        return (
            <div className="pagination">
                <a>{props.page}</a>
                <a onClick={props.nextPage}>»</a>
            </div>
        )
    }
}

export default Pagination