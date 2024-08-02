import 'dotenv/config'
import { run } from './main'
import env from './environment'
import { getController } from './abort'
const timeout = setTimeout(() => getController().abort(), env.TIMEOUT_MS)
// eslint-disable-next-line @typescript-eslint/no-floating-promises
// eslint-disable-next-line github/no-then
run().then(() => timeout.unref())
