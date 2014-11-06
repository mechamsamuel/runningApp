Running App
=========

This will be a mobile app that will log how much users have ran. Users will input how much they run each day and the app will keep track of everything they input. From there it will do two things with the data. First it will just give basic breakdowns of how much the user is running daily or weekly. It will keep all the breakdowns so you could see how much you ran two weeks ago, compared to last week for example. Then it will also take all the breakdowns and give one concise average. For example it would take all the days the user runs and average them out, so that in one quick look the user can see that they average 2.9 miles a day or whatever their average is. This will be for anybody that runs. It can range all the way from the heavy runner that is training for a marathon, down to your neighbor that is trying to run 2 miles a week to lower her cholesterol. 

To get the Technology for the Running App 
----

Once you clone or download my repo you will need to install some packages onto your machine to get it running.
    
###Node 
 http://nodejs.org/ click on this link and download node onto your local machine. 
 
 ###Ionic
 Open the terminal if you are using a mac otherwise open whatever software you use to execute commands. If you are not using the mac terminal run the command below.
 
 ```sh
 npm install ionic -g
```

Otherwise if you are using the mac terminal you will need to put sudo in front of the command. This will make it run without error. 
 ```sh
 sudo npm install ionic -g
```
This will install ionic globally on your machine. 

###Cordova

Still in ther terminal you will now need to run the command to instal cordova globally on your machine. Once again if not in the mac terminal run the command below. 

 ```sh
 npm install cordova -g
```
Otherwise if you are using the mac terminal you will need to put sudo in front of the command. This will make it run without error.
 ```sh
 sudo npm install cordova -g
```

To get Running App, well running 
----

###On a Browser

Once again while in the terminal or whatever software you use to execture commands you need to get change directoried to get to the folder the Running App is in. To do this you would run 'cd' command.
 ```sh
 cd (the path to the folder)
```

Once in the correct foler you will need to run this command to launch the app in your browser.
 ```sh
 ionic serve
```
