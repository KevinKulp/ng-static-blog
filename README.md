# About this project
This project (client & e2e) was generated using `npx create-nx-workspace@latest`.

The domain lib was generated using `npx nx g @nrwl/workspace:lib domain`

# Running this project
To use the nx command, nx should be installed globally. Alternatively, you can run `npx nx serve *`.

By using the nx command instead of ng, we're able to take advantage of some additional capabilities that nx offers including an improved chaching mechanism.

## Client
The client can be started by running `nx serve ng-blog`

The client runs on port 4200 and can be accessed locally at localhost:4200

## E2E
The e2e suite can be executed by running `nx e2e ng-blog-e2e:e2e --watch`

This command will also start the client.

## Running lint
Lint can be executed for all projects by running `nx run-many --all --target=lint`
