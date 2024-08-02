import { createPatient, createCase } from '../api/cases'
import type { PathwayCaseConfig } from '../config'
import {
  OrchestrationPathwayRunner,
  DesignPathwayRunner
} from './pathway-runner'

export class RunnerFactory {
  careflowDefinitionId: string
  e2e: boolean
  constructor({ careflowDefinitionId, e2e }: RunnerFactoryProps) {
    this.careflowDefinitionId = careflowDefinitionId
    this.e2e = e2e
  }

  /**
   * Creates a patient or new pathway case, and then returns the runner used to interact with the Awell API
   * @param param0
   * @returns
   */
  async createRunner({
    careflowDefinitionId,
    config
  }: {
    careflowDefinitionId: string
    config: PathwayCaseConfig
  }): Promise<OrchestrationPathwayRunner | DesignPathwayRunner> {
    if (this.e2e) {
      const { id: caseId } = await createPatient({ lastName: config.title })
      const runner = new OrchestrationPathwayRunner({
        caseId,
        config,
        careflowDefinitionId: this.careflowDefinitionId
      })
      return runner
    } else {
      const { id: caseId } = await createCase({
        careflowDefinitionId,
        config
      })
      const runner = new DesignPathwayRunner({
        caseId,
        config,
        careflowDefinitionId: this.careflowDefinitionId
      })
      return runner
    }
  }
}
export interface RunnerFactoryProps {
  careflowDefinitionId: string
  e2e: boolean
}
