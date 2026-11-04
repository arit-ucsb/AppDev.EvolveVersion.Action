import {readdir} from 'fs';

/**
 * String -> Number[]
 * e.g. 'V1_10__Double_Digit_Minor_Version.sql' -> [1, 10, 0]
 */
 function extractVersion(scriptName) {
  const version = scriptName
    .substring(1)
    .split('__')
    [0];
  const parts = version.split('_');
  return parts
    .concat(Array(3 - parts.length).fill(0))
    .map(Number);
}

function compareVersions(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return a[i] - b[i];
    }
  }
  return 0;
}

// Have to use callback instead of promises, because github actions
// doesn't support node 14 yet.
/**
 * String -> ((Error, String) -> void) -> void
 */
 function getMaxScriptVersion(scriptDir, callback) {
  readdir(scriptDir, (err, files) => {
    if (err) {
      callback(err, undefined);
    } else {
      const versions = files
        .map(extractVersion)
        .sort(compareVersions);
      const maxVer = versions[versions.length - 1];
      callback(undefined, maxVer.join('.'));
    }
  });
}


export {getMaxScriptVersion};
