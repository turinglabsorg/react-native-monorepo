# React Native Monorepo Example

This is an example of a monorepo setup for a React Native project. It uses [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to manage the monorepo and [Expo](https://expo.io/) to manage the React Native project.

## Main changes from the default RN project

- `package.json` is moved to the root of the project, you need to add `private: true` to the root `package.json` to enable workspaces and add `workspaces` field to specify the packages to include in the monorepo.
- `packages/mobile/android/app/build.gradle` is modified to use the root `package.json` as the version of the app, check the comments in the file for more details.
- `packages/mobile/metro.config.js` is added to specify the root of the monorepo as a watch folder for Metro bundler.

## Shared folder

The `shared` folder is a package that contains shared code between the mobile and web packages. It is a regular TypeScript package that can be used by the other packages. It must be compiled to JavaScript before it can be used by the other packages so anytime you make changes to the shared package you need to run `yarn build` in the root of the project to compile the shared package, then you can restart metro bundler to see the changes in the other packages.