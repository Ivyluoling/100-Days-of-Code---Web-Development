const express = require("express");
const resData = require("../utilitycodes/restaurant-data");

const uuid = require("uuid");

const router = express.Router();

router.get("/restaurants", function (req, res) {
  let order = req.query.order;
  let nextOrder = 'desc'

  if (order !== 'asc' && order !== 'desc') {
    order = 'asc';
  }

  if (order === 'desc') {
    nextOrder = 'asc';
  }

  const restaurants = resData.getStoredRestaurants();

  restaurants.sort(function(resA, resB) {
    if (
      (order === 'asc' && resA.name > resB.name) || 
      (order === 'desc' && resA.name  <resB.name)
    ) {
      return 1;
    }
    return -1;
  });

  res.render("restaurants", {
    numberOfRestaurants: restaurants.length,
    restaurants: restaurants,
    nextOrder: nextOrder
  });
});

router.get("/restaurants/:rid", function (req, res) {
  const restaurantId = req.params.rid;
  const restaurants = resData.getStoredRestaurants();

  for (const restaurant of restaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }

  res.status(404).render("404");
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
});

router.post("/recommend", function (req, res) {
  //get the input data and stored in json file
  const restaurant = req.body;
  restaurant.id = uuid.v4(); //randomly generate a unique id for each object

  const restaurants = resData.getStoredRestaurants();

  restaurants.push(restaurant);

  resData.storeRestaurants(restaurants);

  res.redirect("/confirm");
});

router.get("/confirm", function (req, res) {
  res.render("confirm");
});

module.exports = router;
