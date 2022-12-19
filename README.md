# Evolve Version Github Action

This repo defines a [JavaScript GitHub Action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action) that determines the version of a database migration project based on which migration scripts are present.

## Building and Deploying

Run the command `npm run build` to package the action for publishing. This will create a `dist/index.js` file containing all necessary application code. This file is referenced by the GitHub action in order to execute the action.

## Inputs

- `scriptDirectory`: The directory containing database migration scripts.

## Outputs

- `version`: The database version, as determined by the scripts in `scriptDirectory`.

## Example usage

```
- name: Get version
        id: get_version
        uses: arit-ucsb/AppDev.EvolveVersion.Action@v3.0.0
        with:
          scriptDirectory: "./Sql_Scripts"
```
