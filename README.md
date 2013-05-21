# Workout log
### Day to day workout and nutrition log built with node, express and angular.js

#### Target application model

    | Workouts
    |–– Exercises
    |––|–– Add exercise
    |––|–– Edit exercise
    |––|–– Remove exercise
    |–– Workout set
    |––|–– Create set
    |––|––|–– Add exercise
    |––|––|–– Remove exercise
    |––|–– Edit set
    |––|–– Remove set
    |–– Single workout
    |––|–– Add workout
    |––|––|–– Add set
    |––|––|–– Remove set
    |––|–– Edit workout
    |––|–– Remove workout
    |––|–– Load workout set

    | Nutrition
    |–– Food
    |––|–– Add food
    |––|–– Edit food
    |––|–– Remove food
    |–– Dishes
    |––|–– Add dish
    |––|––|–– Add food
    |––|––|–– Remove food
    |––|–– Edit dish
    |––|–– Remove dish
    |–– Meals
    |––|–– Add meal
    |––|––|–– Add food
    |––|––|–– Remove food
    |––|––|–– Add dish
    |––|––|–– Remove dish
    |––|–– Edit meal
    |––|–– Remove meal

    | Body
    |–– Add measurements
    |–– Edit measurements
    |–– Remove measurements

#### TODO List
* Graphs
