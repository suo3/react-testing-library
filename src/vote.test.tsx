import { screen, render } from '@testing-library/react'
import  Vote  from './vote'
import { describe, it, expect } from 'vitest';


describe('Vote', () => {
    it('renders the Vote component', () => {
        render(<Vote totalGlobalLikes={10} />);
        
        const vote = screen.getByTestId('vote');
        expect(vote).toBeInTheDocument();
       // screen.debug(vote)
    })
})