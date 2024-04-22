import { config } from 'dotenv'
config()
import '../src/environment'
const setup = async () => {
  process.env.GITHUB_REPOSITORY = 'awell-health/example-source-control'
  process.env.GITHUB_SHA = 'abc123'
  process.env.INPUT_AWELL_ENVIRONMENT = 'local'
}

export default setup
