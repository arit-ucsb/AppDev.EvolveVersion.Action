import {debug, getInput, setOutput, setFailed} from '@actions/core';
import * as github from '@actions/github';
import {getMaxScriptVersion} from './lib.js';

try {
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  debug(`Event payload: ${payload}`);

  const scriptDir = getInput('scriptDirectory');
  getMaxScriptVersion(scriptDir, (err, version) => {
    if (err) {
      setFailed(err.message);
    } else {
      setOutput('version', version);
    }
  });
} catch (err) {
  setFailed(err.message);
}
