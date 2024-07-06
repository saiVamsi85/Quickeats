# QuickEats ( Food Delivery App )

A fullty functional and secure food delivery app developed using MERN stack. Integrated user authentication to ensure secure access and personalized order history retrieval and a cart for adding food items, enhancing user
 engagement and convenience. Designed intuitive user interfaces for seamless browsing, ordering, and delivering the food.

## 🌟 Commands for running the app

- **⚛️ npx create-react-app my-app**  :
  used for building the react app ; make sure to run this command in the project directory
- **⚛️ npm start**  :
  after creating the react app and all its dependencies and then ENTER, try this command to start the react app (Frontend)
 - **⚛️ nodemon index.js**  :
  (run this after going into backend directory using "cd backend") and then press TAB button and then ENTER , this activates the backend (database connects to the react app)

## 🌟 Features

- **⚛️ Tech Stack**: React.js, MongoDB, Node.js, Express, Tailwind CSS, Bootstrap v5
- **🔐 Authentication**: Secure login and registration using JSON Web Tokens (JWT) and bcrypt for storing passwords in encrypted form
- **👥 Updating Food items in cart**: If you add same type of food item in the cart , it automatically updates the quantity of food item instead of adding it as a new element
- **✍️ Adding Food items to cart**: Add the food items that you want by selecting the option and quantity of each you want to order
- **🗑️ Deleting Food items from cart**: Remove your food items when not needed in the cart using delete button
- **💬 Checking previous Order History**: After checking out in the cart using **checkout** button , you can see that order in myorders.
- **🔒 Get Current Location**: To deliver the food correctly , there has been a button called **Get Location** introduced for getting the current location of the user instantly
- **🔔 Notifications**: Alert (with quantity of cart) is showed on cart button if you add any items to the cart 

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Bootstrap v5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Hosting**: Unsplash.com
