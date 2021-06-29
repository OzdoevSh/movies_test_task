import './Count.css'
function Count(props) {
    return (
        <div>
            <span><b>per page:</b></span>
            <select className="selectBox" value={props.limit} onChange={props.selectItem}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        </div>
    )
}

export default Count