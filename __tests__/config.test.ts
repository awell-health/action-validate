import {
  ActivityType,
  parseConfig,
  toActivityObjectType,
  toActivityType
} from '../src/config'
import { ActivityObjectType } from '../src/gql/types'

describe('config', () => {
  const config = parseConfig('example-careflow-validation.yaml')
  const case1 = config.cases[0]

  it('should log a message', async () => {
    expect(config.cases.length).toBe(1)
  })
  it('should complete three activities', async () => {
    expect(case1.activities.length).toBe(3)
  })
  it('should validate careflow complete', async () => {
    expect(
      case1.validate.filter(v => v.type === ActivityType.CAREFLOW).length
    ).toBe(1)
  })
  describe('Conversion between ActivityType and ActivityObjectType', () => {
    it('should convert activity type to activity object type', () => {
      const at = ActivityType.CAREFLOW
      const aot = ActivityObjectType.Pathway
      const result = toActivityObjectType(at)
      expect(result).toBe(aot)
    })
    it('should convert activity object type to activity type', () => {
      const at = ActivityType.CAREFLOW
      const aot = ActivityObjectType.Pathway
      const result = toActivityType(aot)
      expect(result).toBe(at)
    })
  })
})
