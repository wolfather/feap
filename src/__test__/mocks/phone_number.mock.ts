import { DefaultBodyType, rest } from 'msw';
import { Phone_Number } from '../../entities/phone_number.entity';

export const phone_numbers: Phone_Number[] = [
    {
        id: "351910000000",
        type: "mobile",
        company_id: 1
    },
    {
        id: "351910000001",
        type: "mobile",
        company_id: 2
    },
    {
        id: "351910000002",
        type: "mobile",
        company_id: 4
    },
    {
        id: "351910000003",
        type: "mobile",
        company_id: 3
    }
];

export const handlers = {
    compannies: () => (rest.get('companies', (req, res, ctx) => {
        res(
            ctx.status(200),
            ctx.json({}),
        )
    })),
    phoneNumbers: rest.get<DefaultBodyType, Phone_Number[]>('/phone_numbers', (req, res, ctx) => {
        // if(req.params)
        return res(
            ctx.status(200),
            ctx.json(phone_numbers)
        )
    })
};
