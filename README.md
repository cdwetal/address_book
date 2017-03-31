# address_book

A simple address book app built on a modified MERN stack. M is for MySQL in this case.

## Installing

To install the address_book app, clone or extract the downloaded zip file anywhere on your harddrive. Please be sure to setup your MySQL database properly. You only need to issue the command
```
CREATE DATABASE address_book;
```
in the MySQL Command Line Client. Creation of the table that is used to store the data is handled in the app. To configure the app's connection to the MySQL instance, please adjust the properties on lines 5-7 of the file server.js to your MySQL host, user, and password settings.

After configuring the database, open a terminal window and navigate to the directory in which the project was extracted. To install the necessary node packages, issue the command
```
npm install
```

## Running
To run the address_book app, open a terminal window and navigate to the directory in which the project was extracted. Assuming that all of the installation steps were completed, the command
```
node server
```
will start the address_book app. You may view that running app in a browser by navigating to
```
http://localhost:3000/
```

## Building
If you wish to rebuild the address_book app, you must have gulp installed globally. You may do this by opening a terminal window and issuing the command
```
npm install -g gulp
```
After installing gulp globally, in a terminal window, navigate to the directory in which the project was extracted and issue the command
```
gulp
```
This will update the bundle.js file in the static folder. You may now run the app as illustrated in the previous section.
