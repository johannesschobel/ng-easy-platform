import { JsonObject } from '@angular-devkit/core';

import { BranchSpecJson } from './models';

export interface SemanticReleaseBaseSchema extends JsonObject {
  branches: BranchSpecJson[];
  changelog: boolean;
  dryRun: boolean;
  force: boolean;
  github: boolean;
  npm: boolean;
  releaseCommitMessage: string;
}
