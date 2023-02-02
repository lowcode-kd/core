import jest from 'jest';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(fileURLToPath(import.meta.url), '../../');
const JEST_CONFIG_FILE = `${ROOT}jest.config.js`;
function test(command) {
    const config = {
        rootDir: ROOT,
        // watch: command.watch,
        // debug: command.debug,
        config: JEST_CONFIG_FILE,
        // runInBand: command.runInBand,
        // clearCache: true,
        // changedSince: command.changedSince,
        // logHeapUsage: command.logHeapUsage,
        maxWorkers: '50%',
    };
    jest
        .runCLI(config, [ROOT])
        .then((response) => {
            if (!response.results.success && !command.watch) {
                process.exit(1);
            }
        })
        .catch((err) => {
            console.log(err);

            if (!command.watch) {
                process.exit(1);
            }
        });
}

test();