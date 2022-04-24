export const environment = {
  production: true,
  amplify: {
    Auth: {
      identityPoolId: 'us-east-1:57a33aaf-0026-44e3-908c-7fb9d5730b9f',
      region: 'us-east-1',
    },
    geo: {
      AmazonLocationService: {
        maps: {
          items: {
            AmazonMap: {
              style: 'Default style',
            }
          },
          default: 'AmazonMap',
        },
        region: 'us-east-1',
      },
    },
  },
};
