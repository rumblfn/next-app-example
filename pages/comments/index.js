import { useState } from "react"

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [editCommentId, setEditCommentId] = useState(null);
    const [newComment, setNewComment] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
        setEditCommentId(null)
        setNewComment('')
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        fetchComments()
        console.log(data)
    }

    const deleteComment = async commentId => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })

        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    const editComment = (commentId) => {
        setEditCommentId(commentId)
    }

    const updateComment = async () => {
        const response = await fetch(`/api/comments`, {
            method: 'PATCH',
            body: JSON.stringify({
                commentId: editCommentId,
                newComment
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        fetchComments()
        console.log(data)
    }

    return (
        <div>
            <input type="text"
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            <button onClick={submitComment}>Submit comment</button>
            <button onClick={fetchComments}>Load comments</button>
            {comments.map(comment => 
                <div key={comment.id}>
                    {editCommentId === comment.id ?
                        <>
                            <input type="text"
                                value={newComment}
                                onChange={e => setNewComment(e.target.value)}
                            />
                            <button onClick={updateComment}>Update</button>
                        </>
                    : <>
                        {comment.id} {comment.text}
                        <button onClick={() => {deleteComment(comment.id)}}>Delete</button>
                        <button onClick={() => {editComment(comment.id)}}>Edit</button>
                    </>
                    }
                </div>
            )}
        </div>
    )
}

export default CommentsPage