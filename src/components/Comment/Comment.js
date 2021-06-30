import './Comment.css'
function Comment(props) {
    if (props.comments.length > 0) {
        return (
            <div className="commentContainer">
                <h3>Reviews</h3>
                <div>
                    {props.comments.map((item, index) => {
                        return (
                            <div className="commentField" key={item.id}>
                                <div>{item.comment}</div>
                                <div><button className="deleteButton" onClick={props.delete(index)}>Delete</button></div>
                            </div>
                        )
                    })}
                </div>
            </div>)
    } else return (<div></div>)
}
export default Comment;