import {getMaxScriptVersion} from '../src/lib.js';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('gets the maximum version from migration scripts directory', done => {
  const scriptDir = path.resolve(__dirname, 'scriptDirFixture');
  getMaxScriptVersion(scriptDir, (err, version) => {
    expect(err).toBe(undefined);
    expect(version).toBe('1.10.0');
    done();
  });
});

test('calls back with error when directory not found', done => {
  const scriptDir = path.resolve(__dirname, 'notFoundFixture');
  getMaxScriptVersion(scriptDir, (err, version) => {
    expect(err.code).toBe('ENOENT');
    expect(version).toBe(undefined);
    done();
  });
});
