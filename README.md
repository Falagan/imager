## PROJECT: imager

## INDEX

* [1 INTRODUCTION](#1INTRODUCTION)
* [2 GLOBAL ARCHITECTURE](#2LIB-STACK)
* [3 DESIGN RULES](#3DESIGN-RULES)
* [4 ENVIRONMENTS](#4ENVIRONMENTS)
  - [4.1 LOCAL](#41LOCAL)
  - [4.2 DEVELOPMENT](#42DEVELOPMENT)
  - [4.3 PREPRODUCTION](#43PREPRODUCTION)
  - [4.4 PRODUCTION](#44PRODUCTION)
* [5 TESTING](#5TESTING)
  Plugin Logo Code Editing
* [8 DEPLOYMENT](#6DEPLOYMENT)
* [9 BUSINESS LOGIC CONSIDERATIONS](#7BUSINESS-LOGIC-CONSIDERATIONS)

---

* ## 1.INTRODUCTION

  Imager is a project to hold several apps that conform a hypothetical image management system. 
  It is composed by a backend (no developed yet) and a frontend. The backend will be a nodejs app that uses express and mongoose and
  the frontend is an angular app with the new standalone components strategy and features like multilanguage, advance forms management,
  and material UI styled.


* ## 2.LIB STACK

  > UI Global style: Angular Material
  > UI Responsive: Bootstrap
  > UI Components: Angular Material
  > i18n: NgxTranslate
  > Forms Management: Formly with Material flavour
  > Code Style: Prettier
  > Git:
    > Strategy: GitFlow.
    > Utils: Husky, Commitlint, Lint-staged and SpellChecker.
  > Containers: Dockerized 

* ## 3.DESIGN RULES

  - Standalone strategy
  - Lazy loading
  - OnPush strategy
  - MiniStores with Rxjs to handle state
  - Dotenv to handle environment variables
  
* ## 4.ENVIRONMENTS
  ### 4.1.LOCAL
  #### 4.1.1. WITHOUT DOCKER

          -   Environment variables:

                  file .env

          -   Run the application:

                  npm install
                  npm run back-office:local
                  npm run back-office:local

  #### 4.1.2. WITH DOCKER
  - Environment variables:

                file docker-compose.base.yml -> environment

  - Containers bootstrapping

                npm install
                docker-compose up

  - Debugging over docker

    -  IntelliJ IDEA

                new configuration -> attach to node/chrome 
                 >   localhost:[debugger port]
                 >   connect automatically

    - Visual Studio Code

                  create launch.json
                  {
                    "version": "0.2.0",
                    "configurations": [
                      {
                      "type": "node",
                      "request": "attach",
                      "name": "Debug: App",
                      "remoteRoot": "/app",
                      "localRoot": "${workspaceFolder}",
                      "port": [debugger port],
                      "restart": true,
                      "sourceMaps": true,
                      "resolveSourceMapLocations": ["${workspaceFolder}/**", "!**/node_modules/**"],
                      "trace": true
                      }
                    ]
                 }

    ### 4.2.DEVELOPMENT
    ### 4.3.PREPRODUCTION
    ### 4.4.PRODUCTION
## 5.TESTING
## 6.DEPLOYMENT
## 7.BUSINESS LOGIC CONSIDERATIONS
