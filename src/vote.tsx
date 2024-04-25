import React, {  useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Stack, Row } from 'react-bootstrap';


interface VoteProps {
    totalGlobalLikes: number,
    action: {type:string}
}

interface LikeProps {
totalLikes: number, hasVoted: boolean, clickedLike:boolean, clickedDislike:boolean
}
interface ActionProps {
    type: string
}
const Vote: React.FC<VoteProps> = (props) => {
    const likeReducer = (state: LikeProps, action: ActionProps) => {
        switch (action.type) {
            case 'LIKE':
                return {
                    ...state,
                    totalLikes: state.totalLikes + 1,
                    hasVoted: true,
                    clickedLike:true
                }
            case 'DISLIKE':
                return {
                    ...state,
                    totalLikes: state.totalLikes - 1,
                    hasVoted: true,
                    clickedDislike:true
                }
            default:
                return state
       }
   } 

    
    const [state, dispatch] = useReducer(likeReducer, {
        totalLikes: props.totalGlobalLikes,
        hasVoted: false,
        clickedLike: false,
        clickedDislike: false
    })

    const { totalLikes, hasVoted, clickedLike, clickedDislike } = state;
    const handleLikeVote = () => dispatch({ type: 'LIKE' })
    const handleDislikeVote = () => dispatch({ type: 'DISLIKE' })


    return (
        <Container data-testid="vote">
            <Row>
                <h4>Like or dislike</h4>
                <Stack>
                    <Button data-testid="like" variant={clickedLike ? "success":"secondary"} onClick={handleLikeVote} disabled={hasVoted}><FontAwesomeIcon icon={faThumbsUp} /></Button>
                    <div data-testid="totalLikes">{totalLikes}</div>
                    <Button data-testid="dislike" variant={clickedDislike ? "danger":"secondary"} onClick={handleDislikeVote} disabled={hasVoted}><FontAwesomeIcon icon={faThumbsDown} /></Button>
                </Stack>
            </Row>
        </Container>
    )
}



export default Vote;