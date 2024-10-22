# React-Redux Shopping Cart Application

This project is a simple shopping cart web application built using **React**, **Redux Toolkit**, **React Router**, and **Bootstrap**. The application features a product list, a cart system where users can add/remove products, view total items, and purchase individual or all items in the cart.

## Preview

[![React-Redux Shopping Cart Application Preview]()]()

**[View Live Preview]()**

## Features

- **Home Page**: Displays a list of products fetched from a mock API.
- **Add to Cart**: Users can add products to their cart from the home page.
- **Cart Page**: Users can increase/decrease the quantity of items in the cart, remove items, and view total price and quantity.
- **Buy Functionality**: Users can buy individual items or all items at once.
- **Responsive Navbar**: The navbar includes links to the home page and cart, with a dropdown for smaller screens.
- **State Management**: Application state is managed using **Redux Toolkit**.
- **Routing**: Page navigation is handled by **React Router**.
- **Bootstrap**: The application uses Bootstrap for styling and responsive design.

## Technologies Used

- **React**: Frontend framework.
- **Redux Toolkit**: State management library.
- **React Router**: Client-side routing.
- **Bootstrap**: Responsive design and UI components.
- **Axios**: HTTP client to fetch data from a mock API.
- **Mock API**: Data is fetched from [MockAPI](https://mockapi.io/) for demonstration purposes.
- **React Icons**: Icon components used in buttons and UI elements.

## Mock API Setup

The project fetches product data from a mock API. The default API URL is: [https://6716a7d63fcb11b265d33f1b.mockapi.io/react-redux-pd-api](https://6716a7d63fcb11b265d33f1b.mockapi.io/react-redux-pd-api)

## Usage

1. **Home Page**:
   - Displays products with a title, image, description, and price.
   - Users can add products to their cart by clicking the "Add to Cart" button.

2. **Cart Page**:
   - Displays all the items added to the cart.
   - Users can increase or decrease the quantity of an item, remove items, or view the total price and quantity.
   - "Buy Now" button allows purchasing an individual product.
   - "Buy All" button allows purchasing all products in the cart at once.

3. **Navbar**:
   - Links to the Home and Cart pages.
   - Shows the current total number of items in the cart.

## Dependencies

- **React**: ^18.x
- **Redux Toolkit**: ^1.8.x
- **React Redux**: ^8.x
- **React Router DOM**: ^6.x
- **Bootstrap**: ^5.x
- **Axios**: ^0.27.x
- **React Icons**: ^4.x

## Deployment

The application is deployed on Netlify. You can view the live version of the application by visiting the following link:

[Live Application]()
