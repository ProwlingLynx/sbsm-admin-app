## Notes
A couple of things to keep in mind for using this server:
- You will need env variables:
    1. PORT - the port to run the server on
    2. GAS Secrets - speak to Jake Hawkins for these.
- .env file is in the root of the SERVER directory
- If you are developing the front end and add any enviroment variables, you will need to add them to .env file found in the front end directory.
- Avoid name collisions with the server env variables. Call CREATE_REACT_APP_[name of variable] for the front end.
- When building the project for the first time, you will need to run the following commands in the this order:
    1. ```npm install``` (Important: you must have typeScript installed globally before moving on)
    2. ```npm run build```
    3. ```npm run start```
- The above commands will get you started. If you need to make changes then I recommend you run ```watch``` and ```dev:start``` instead.
- ```build:clean``` will clean the build directory of any files that would have been outputted from the build process. This does not include any files that were added outside of the build process.