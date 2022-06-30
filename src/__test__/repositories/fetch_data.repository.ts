import { setupWorker } from 'msw';
import { handlers } from '../mocks/phone_number.mock';

const worker = setupWorker(handlers.compannies())


worker.start();