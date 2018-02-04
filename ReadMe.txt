server side:
step 1: npm install
step 2: npm start

client side:
http://localhost:3000


Description:
A local server has been created on port 3000 which runs in the backend.
The controller routes then to the index.html page.
Inside the index page, the click event is used to send the request to fetch data using socket.emit method. The request is then passed to the model to fetch the data.
The data from model is sent through socket.on menthod to the client i.e. index.html.
The data is then checked and then appropriate html is added.


Alternative method:
Instead of having a function for generating the 'CO2' pm value, we can also fetch data from api end point using 'request' library and use that data to display in our client side.


