## Angular and Node JS - Message Board Application
### 1.1 Intro
node -v
ng new frontend
ng serve or npm start (scripts in package.json file)

## 2 Displaying data in Angular
### 2.1 Creating the component
ng g c messages
*ngFor="let message of messages"
ng serve -o

### 2.2 Angular Material
https://material.angular.io/guide/getting-started
npm install --save @angular/material @angular/cdk @angular/animations
Note: Install 7.2.0 to avoid errors
Use buttons and cards. (Make sure to import both html and ts content)