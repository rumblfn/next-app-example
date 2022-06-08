import { comments } from "../../../data/comments"

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comments)
    } else if (req.method === 'POST') {
        const comment = req.body.comment
        const newComment = {
            id: Date.now(),
            text: comment
        }
        comments.push(newComment)
        res.status(201).json(newComment)
    } else if (req.method === 'PATCH') {
        const newComment = req.body.newComment
        const commentId = req.body.commentId
        let updatedComment = {}

        comments.map(comment => {
            if (comment.id === +commentId) {
                comment.text = newComment
                updatedComment = {...comment}
            }
            return comment
        })

        res.status(200).json(updatedComment)
    }
}