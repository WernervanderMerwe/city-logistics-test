# Setup

Clone the repository at [https://github.com/WernervanderMerwe/city-logistics-test](https://github.com/WernervanderMerwe/city-logistics-test)

By using the following commands in your Visual Studio Code Terminal

```
 git clone https://github.com/WernervanderMerwe/city-logistics-test.git
 cd frontend
 yarn install
```

# Running the App

To start the Api proxy server navigate to the Api folder and open the `Api.sln` file with Visual Studio 2022
In the Visual Studio window there is a toolbar with a green triangle and Api written next to it, click on it to start the server.
Alternatively with Visual Studio selected press `F5`.

To stop the server press on the red square in the top toolbar.
Alternatively with Visual Studio selected press `Shift + F5`

If you have already changed directory to `frontend` type in `yarn start` in the Terminal

If it is a fresh startup with Visual Studio Code then type in

```
cd frontend
yarn start
```

## **Note** You have to start the Api server before the react app will communicate with the chucknorris.io API
