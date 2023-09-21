HNGX FRONTEND TACK TASK 3
Title: Drag and Drop Image Gallery.
Objectives:
To develop an image gallery Application that will enable users to: 
> Drag and drop or rearrange images within the gallery.
> The users will be able to perform filter query by the search the images by their tag name.
> That will aunthenticate users, hence only authenticated users will access the gallery.

The above features of the application was successfully achieved.

The drag and drop functionality of app was achieved with the help of React DnD in built component and its associated hocks = useDrag() and useDro().
This hooks was tweaked to achieve the dragging, dropping and rearrangement of the images within the gallery.

The images used was stored in an array called gallery.
It was looped to display them in a grip according to the project instruction.

The filter functionality was also performed with the iteration of the gallery array.

The authentication function was also done with Firebase and React integration.
The login form tests the users details to know it it matches with the registered email and password.
However, the given email and password == "user@example.com" and "1Password" was registered in the Firebase database first before using it to login, hence any user signing in 
apart from the above emails will be denied access to the application.
A loading effect was also captured before the images display. 

Css was also used to add animations, and other aesthetic features to the application.

npx create-reacte-app mygallery ==== command to create the application
cd ....\mygallery ==== command to get to the application folder.
npm start ==== command to start the application.

GitHub hosted link: https://images-tau-two.vercel.app/login
GitHub repository link: https://github.com/Emmadegreat/images

