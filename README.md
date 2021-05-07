# React App template
- [Requirements](#requirements)
- [How to use](#how-to-use)
    - [Development](#development)
    - [Production](#production)

# Requirements
- [NodeJS](https://nodejs.org/en) ^14.*
- Yarn

## Dependencies
- [React](https://www.npmjs.com/package/react)
- [Redux](https://www.npmjs.com/package/redux)
- [Typescript](https://www.npmjs.com/package/typescript)
- [Webpack](https://www.npmjs.com/package/webpack)
- [Sass loader](https://www.npmjs.com/package/sass-loader)

# How to use

## Development
### Before using

#### Check your environment

##### Node js
```sh
node -v         # ^v14.16.0
```
If nodejs not exists, you need to install nodejs ^14.*
- linux 
    ```sh 
    sudo apt-get install nodejs -y
    ```
- windows [Get NodeJS](https://nodejs.org/en)

##### Yarn
```sh
yarn -v         # ^1.22.10
```
If yarn not exists, you need to install yarn ^1.*
```sh 
npm i -g yarn
```

##### Install linter
- Install tslint 
    ```sh
    npm i -g tslint
    ```
- Add tslint extention to your IDE

##### Install formatter
- Install formatter
    ```sh
    npm i -g prettier
    ```
- Add prettier extention to your IDE

#### Install dependencies
- Install dependencies
    ```sh
    yarn
    ```

#### Run development server
- Run live server
    ```sh
    yarn watch      # Live server in development mode on `127.0.0.1:4200`
    ```

## Production

##### Install docker
[Docker installation guide](https://docs.docker.com/engine/install/debian/)

##### Install docker-compose
[Docker-compose installation guide](https://docs.docker.com/compose/install/)

##### Build docker-containers
```sh
docker-compose build
```

##### Run docker-containers
```sh
docker-compose up -d
```

##### Before first build
- Run build in docker container 
    ```sh
    docker-compose exec frontend yarn build
    ```
- Create public folder 
    ```sh 
    mkdir project
    ```

##### Configure nginx
You need to resolve nginx to `current` dirrectory(symlink)

##### Build
- Add access to `build.sh`
    ```sh
    chmod +x build.sh
    ```
- Run build script
    ```sh
    ./build
    ```
