import { initMain } from '@src/core/main.init';

async function start() {
    await initMain();
    await import('./main');
}
start()