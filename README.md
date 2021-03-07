# Continuous Integration/Deployment practice

This repo was thought out as a simple exercise in setting up a Next.js project that uses the concepts of continuous integration (CI) and deployment (CD) which was achieved using the platforms [CircleCI](https://circleci.com/), [Heroku](https://www.heroku.com/) and Github.

In summary it involved connecting the Github repository to the CircleCI account, setting up the [Jest](https://jestjs.io/) framework for code testing, defining environment variables and a Procfile for automated deployment to Heroku, and at last creating a config.yml file which governs the process of building, testing and deploying the project through CircleCI.

## config.yml

In the config file you can declare different jobs and this project has one job which is 'build'. It handles building the project along with running tests and installing the dependencies needed. It also has the workflow 'heroku_deploy' which orchestrates the previous 'build' job along with the heroku/deploy-via-git job which is acquired from the Heroku orb. This job has the 'requires' conditional set to the 'build' job so it won't deploy the project unless the build job succeeds (all tests pass etc).

The CircleCI configuration file can be setup in a very simple or complex ways allowing you to customize the build process to the project's needs. For instance you can control what branches run which jobs since maybe you only want to run the build/test jobs on a feature branch while the master branch should be able to deploy the project. 

## tests
The [Jest](https://jestjs.io/) framework provides ways to test our code along with a bunch of libraries which makes it capable to test React related components. To run the tests locally you can run the command 'npm run test' but they are also run when the code is pushed to github.

The tests I implemented were just for demonstration purposes, one test files imports a function that checks if a number is even and the other file tests if a specified text was present in a component. Jest looks for test files in the "\__tests__" folder which is where the current tests are located.

## support material:
Continuous deployment for Next.js apps:  
https://circleci.com/blog/continuous-deployment-for-next-js-apps/

Continuous integration for Next.js apps:  
https://circleci.com/blog/next-testing/

CircleCI documentation:
https://circleci.com/docs/

