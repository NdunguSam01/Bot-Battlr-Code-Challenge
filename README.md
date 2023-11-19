# Bot Battlr Code Challenge

This is a mini React.JS web app that shows a list of bots and allows a user to add bots to their bot army.
## Pre-requisites

To successfully run the project on your local machine, the following softwares need to be installed

[Node.js](https://nodejs.org/): Download and install Node.js from the official website.

[JSON Server](https://www.npmjs.com/package/json-server): Download and install JSON server from the npm official website.

Alternatively, you can install JSON Server using the command line by typing the following command in your terminal

```bash
npm i json-server
```

## Getting started

## 1. Clone the repository

You can do this by :

i. Opening the terminal and pasting the following command 

```bash
git clone https://github.com/NdunguSam01/Bot-Battlr-Code-Challenge.git
```

ii. Downloading the zipped file by clicking Code (the green button at the top) then Download ZIP option. Once the download is complete, open File Explorer then locate the downloaded file under Downloads. Open the folder and extract it to your desired file location

## 2. Navigate to the project directory

Once done, navigate to where the project is and open it using your desired text editor

```
cd Bot-Battlr-Code-Challenge
```

## 3. Installing dependencies

Since the project's dependencies are not installed, you need to run the following command in the terminal.

```bash
npm install
```

This command will install the various dependencies e.g. react-app required to successully run this project 

## 4. Start the JSON server
Since this project fetches data from a local JSON file, you will need to run the following command in order to start the mock JSON server.

```bash
json-server --watch transactions.json --port 3001
```

The reason for specifying port 8000 is because the default port number (3000) will be used to run the react application

## 5. Running the React.JS application
To run the React application, type the following command in the terminal

```bash
npm start
```
Once this command runs, the page will be automatically be opened in your browser.

## 6. Expected results

Once the page loads, a list of the bots will be displayed and a user is able to add his/her favorite bots to the bot army.

## Author
[Samuel Muigai](https://github.com/NdunguSam01)