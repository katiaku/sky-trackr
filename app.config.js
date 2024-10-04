export default ({ config }) => ({
  ...config,
  extra: {
    TEST_KEY: process.env.TEST_KEY,
  },
});
