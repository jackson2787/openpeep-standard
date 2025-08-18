import { readFile } from 'node:fs/promises';
import { glob } from 'glob';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import chalk from 'chalk';

const ajv = new Ajv({ strict: false, allErrors: true });
addFormats(ajv);

// Load all schemas so cross-$ref works
const schemaFiles = await glob('schemas/**/*.json');
for (const f of schemaFiles) {
  const s = JSON.parse(await readFile(f, 'utf8'));
  ajv.addSchema(s);
}

const pairs = [
  ['schemas/pcfra.schema.json', 'examples/pcfra.example.json'],
  ['schemas/peep.schema.json', 'examples/peep.example.json'],
  ['schemas/rpeep.schema.json', 'examples/rpeep.example.json'],
  ['schemas/ees.schema.json', 'examples/ees.example.json'],
  ['schemas/common/consent.schema.json', 'examples/consent.example.json']
];

let failed = false;

for (const [schemaPath, dataPath] of pairs) {
  const schema = JSON.parse(await readFile(schemaPath, 'utf8'));
  const validate = ajv.compile(schema);
  const data = JSON.parse(await readFile(dataPath, 'utf8'));
  const ok = validate(data);
  if (ok) {
    console.log(chalk.green(`✓ ${dataPath} valid against ${schemaPath}`));
  } else {
    failed = true;
    console.error(chalk.red(`✗ ${dataPath} invalid against ${schemaPath}`));
    console.error(validate.errors);
  }
}

if (failed) {
  process.exit(1);
}
