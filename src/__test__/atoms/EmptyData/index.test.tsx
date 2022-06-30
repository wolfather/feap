import React from 'react';
import { render, RenderResult, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { EmptyData } from '../../../components/atoms/EmptyData';

let documentBody: RenderResult;

describe('<EmptyData />', () => {
    
    test('test <EmptyData />', () => {
        documentBody = render(<EmptyData text='some message' />);
        expect(documentBody.getByText('some message')).toBeInTheDocument();
    });
});
