import { config } from 'dotenv'
config()
process.env.INPUT_AWELL_ENVIRONMENT = 'development'
import '../src/environment'
const setup = async () => {
  process.env.GITHUB_REPOSITORY = 'awell-health/example-source-control'
  process.env.GITHUB_SHA = 'abc123'
}

export default setup
