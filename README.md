# AngularSpringbootTest
A test project making e2e calls with Angular and Springboot, using a mySQL db

*This guide is assuming you've already installed angular*

**Steps to run**
1. Navigate to the `test-proj` folder
2. Run an `npm install` the first time you run the project
3. Run an `ng serve`

*ASSUMING AT THIS POINT YOU HAVE THE SPRINGBOOT APP RUNNING (https://github.com/zlitteral/AngularSpringbootTest-Springboot)*

4. On Windows, hit windows key + R and paste in the command `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`
This will get around chrome's rules about CORS
5. Navigate to `http://localhost:4200`

**Steps to test**
1. Navigate to the `test-proj` folder
2. Run an `npm install` the first time you run the project
3. Run an `ng test --code-coverage`
