import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";

import { PhoneNumber } from '../../../components/pages/Phone_number';
// import { phone_number } from '../../mocks/phone_number.mock'

let documentBody: RenderResult;


describe('<PhoneNumber />', () => {
    
    test('test <PhoneNumber />', () => {
        documentBody = render(<PhoneNumber />);
        
        expect(documentBody.getByText('...PhoneNumber')).toBeInTheDocument();
    });
});
