import { getCases } from '../src/api/cases'
import * as client from '../src/api/client'
import * as core from '@actions/core'
import { getController } from '../src/abort'
import { mockedGetClient } from '../__mocks__/client'
describe('cases', () => {
  const clientSpy = jest
    .spyOn(client, 'getClient')
    .mockImplementation(mockedGetClient)
  let controller: AbortController
  beforeEach(() => {
    controller = new AbortController()
  })
  afterEach(() => {
    controller.abort()
  })
  it('should fetch cases', async () => {
    const careflowId = core.getInput('careflow_id')
    const cases = await getCases(careflowId)
    expect(clientSpy).toHaveBeenCalled()
    expect(cases.pathway_cases).toBeDefined()
    expect(cases.pathway_cases.success).toBe(true)
    expect(cases.pathway_cases.pathway_cases.length).toBeGreaterThanOrEqual(0)
  })
})
