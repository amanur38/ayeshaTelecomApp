const target = process.argv[process.argv.length - 1].replace('--input=', '');
module.exports = {
  dealer: {
    input: target,
    output: {
      // mode: 'tags-split',
      target: './src/endpoints.ts',
      schemas: './src/dtos',
    },
  },
};
