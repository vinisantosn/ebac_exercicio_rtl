import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComment />);
        
        const textarea = screen.getByTestId('comment-input-area');
        const button = screen.getByTestId('btn-comment-submit');
                
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);
        expect(screen.getAllByTestId('comment-item')[0]).toHaveTextContent('Primeiro comentário');
        
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);
        
        expect(screen.getAllByTestId('comment-item')[1]).toHaveTextContent('Segundo comentário');
        
    });
});