import { screen, render} from '@testing-library/react'
import user from '@testing-library/user-event';
import  Vote  from './vote'
import { describe, it, expect } from 'vitest';


describe('Vote', () => {
    it('renders the Vote component', () => {
        render(<Vote totalGlobalLikes={10} />);
        
        const vote = screen.getByTestId('vote');
        expect(vote).toBeInTheDocument();
    })

    it('increases total likes by 1', async () => {
        render(<Vote totalGlobalLikes={10} />);
        const like = screen.getByTestId('like');
        const totalLikes = screen.getByTestId('totalLikes');
        await user.click(like)
        expect(totalLikes).toHaveTextContent('11')
    })
    
    it('decreases total likes by 1', async () => {
        render(<Vote totalGlobalLikes={10} />);
        const dislike = screen.getByTestId('dislike');
        const totalLikes = screen.getByTestId('totalLikes');
        await user.click(dislike)
        expect(totalLikes).toHaveTextContent('9')
    })
})