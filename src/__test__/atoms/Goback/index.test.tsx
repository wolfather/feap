import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { Goback } from '../../../components/atoms/Goback';
let documentBody: RenderResult;

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

describe('<Goback />', () => {
    
    test('test <Goback />', () => {
        documentBody = render(<Goback text='voltar' />);
        
        expect(documentBody.getByText('voltar')).toBeInTheDocument();
    });
});
