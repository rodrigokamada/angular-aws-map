// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
