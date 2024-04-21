import 'dotenv/config'
import { run } from './main'
import controller from './abort'
import env from './environment'
const timeout = setTimeout(() => controller.abort(), env.TIMEOUT_MS)
// eslint-disable-next-line @typescript-eslint/no-floating-promises
// eslint-disable-next-line github/no-then
run().then(() => timeout.unref())
