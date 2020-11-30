import React, { useState } from "react";
import { StyleSheet, css } from 'aphrodite';
import { Steps } from 'antd';
import { Container } from 'reactstrap';

import RecipeCard from "../../components/RecipeCard";

const { Step } = Steps;

const Recipes = props => {
  const [recipes, setRecipes] = useState([
    {
      "name" : "Pulled Pork Sandwiches",
      "prep_time" : "30 min",
      "cook_time" : "10 min",
      "difficulty" : 3,
      "rating" : 5,
      "special_requirements" : null,
      "author" : "Andrew Galloway",
      "accessibility" : "PUBLIC",
      "type" : "meal",
      "source" : "pramodgobburi.com",
      "media": [
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/7/2/0/DG0104H_pulled-pork-sandiwch_s4x3.jpg.rend.hgtvcom.826.620.suffix/1435869335054.jpeg",
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/2/2/FNM_110112-Slow-Cooker-Pulled-Pork-Sandwiches-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1504040037237.jpeg",
      ],
      "ingredients": [
        "4 to 6 cups chicken stock or water",
        "1 (3 pound) boneless pork butt",
        "Salt and freshly ground black pepper",
        "BBQ Sauce, recipe follows",
        "8 to 12 soft buns with sesame seeds",
        "Pickled Jalapenos, recipe follows",
        "1 tablespoon canola oil",
        "1 small Spanish onion, finely diced",
        "1 jalapeno, finely diced",
        "2 tomatoes, coarsely chopped",
        "1 (15-ounce) can diced tomatoes",
        "2 cups cider vinegar",
        "1/4 cup honey",
        "1/2 cup light brown sugar",
        "1 tablespoon Worcestershire sauce",
        "Salt",
        "3 cups rice wine vinegar",
        "3 tablespoons sugar",
        "1 teaspoon white peppercorns",
        "1 teaspoon coriander seeds",
        "1 teaspoon mustard seeds",
        "1/2 teaspoon cumin seeds",
        "2 tablespoons kosher salt",
        "3 jalapenos, sliced in half lengthwise",
        "7 sprigs fresh cilantro"
      ],
      "instructions": "Special equipment: 1 (8-ounce) jar\nPreheat the grill to medium heat (the grill should maintain a constant temperature of 350 degrees F). Place a drip pan filled half-way with the chicken stock on the briquettes. Season the pork butt with salt and pepper and place on the grates of the grill over the drip pan. Close the cover of the grill and let the pork cook for 1 hour. Turn the pork over and continue grilling for 2 to 3 hours, or until it reaches an internal temperature of 160 degrees F. More chicken stock may be needed to refill the drip pan during grilling. Remove the pork from the grill and let rest for 15 minutes. When it is cool enough to handle, shred the pork into strands with your fingers. Add the shredded pork to the BBQ Sauce and serve on sandwich buns with the Pickled Jalapenos.\nHeat oil in a medium saucepan on the grates of the grill. Add the onion and jalapeno and cook until soft. Add the fresh tomatoes, canned tomatoes and juices, vinegar, honey, brown sugar and Worcestershire sauce, and cook until the sugar has completely melted and the sauce is slightly reduced and thickened. Season with salt, to taste. Add the shredded pork and stir to coat.\nCombine the vinegar, sugar, peppercorns, seeds, and salt in a medium saucepan and bring to a boil. Let boil for 2 minutes, and then remove from the heat and let sit until cooled to room temperature.\nPlace the jalapenos, stem side up, into the jar and pour enough cooled vinegar mixture over them to cover. Pack the cilantro sprigs into the jar. Cover and refrigerate for at least 24 hours and up to 4 days.",
      "description": "Perfect for a crowd, this moist pulled pork, slow cooked with chicken broth, cider vinegar and barbecue sauce, is topped with a crunchy slaw for an easy dish that will help both your kitchen and you keep your cool.",
      "serving_size" : 1,
      "calories" : 400,
    },
    {
      "name" : "Pulled Pork Sandwiches",
      "prep_time" : "30 min",
      "cook_time" : "10 min",
      "difficulty" : 3,
      "rating" : 5,
      "special_requirements" : null,
      "author" : "Andrew Galloway",
      "accessibility" : "PUBLIC",
      "type" : "meal",
      "source" : "pramodgobburi.com",
      "media": [
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/7/2/0/DG0104H_pulled-pork-sandiwch_s4x3.jpg.rend.hgtvcom.826.620.suffix/1435869335054.jpeg",
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/2/2/FNM_110112-Slow-Cooker-Pulled-Pork-Sandwiches-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1504040037237.jpeg",
      ],
      "ingredients": [
        "4 to 6 cups chicken stock or water",
        "1 (3 pound) boneless pork butt",
        "Salt and freshly ground black pepper",
        "BBQ Sauce, recipe follows",
        "8 to 12 soft buns with sesame seeds",
        "Pickled Jalapenos, recipe follows",
        "1 tablespoon canola oil",
        "1 small Spanish onion, finely diced",
        "1 jalapeno, finely diced",
        "2 tomatoes, coarsely chopped",
        "1 (15-ounce) can diced tomatoes",
        "2 cups cider vinegar",
        "1/4 cup honey",
        "1/2 cup light brown sugar",
        "1 tablespoon Worcestershire sauce",
        "Salt",
        "3 cups rice wine vinegar",
        "3 tablespoons sugar",
        "1 teaspoon white peppercorns",
        "1 teaspoon coriander seeds",
        "1 teaspoon mustard seeds",
        "1/2 teaspoon cumin seeds",
        "2 tablespoons kosher salt",
        "3 jalapenos, sliced in half lengthwise",
        "7 sprigs fresh cilantro"
      ],
      "instructions": "Special equipment: 1 (8-ounce) jar\nPreheat the grill to medium heat (the grill should maintain a constant temperature of 350 degrees F). Place a drip pan filled half-way with the chicken stock on the briquettes. Season the pork butt with salt and pepper and place on the grates of the grill over the drip pan. Close the cover of the grill and let the pork cook for 1 hour. Turn the pork over and continue grilling for 2 to 3 hours, or until it reaches an internal temperature of 160 degrees F. More chicken stock may be needed to refill the drip pan during grilling. Remove the pork from the grill and let rest for 15 minutes. When it is cool enough to handle, shred the pork into strands with your fingers. Add the shredded pork to the BBQ Sauce and serve on sandwich buns with the Pickled Jalapenos.\nHeat oil in a medium saucepan on the grates of the grill. Add the onion and jalapeno and cook until soft. Add the fresh tomatoes, canned tomatoes and juices, vinegar, honey, brown sugar and Worcestershire sauce, and cook until the sugar has completely melted and the sauce is slightly reduced and thickened. Season with salt, to taste. Add the shredded pork and stir to coat.\nCombine the vinegar, sugar, peppercorns, seeds, and salt in a medium saucepan and bring to a boil. Let boil for 2 minutes, and then remove from the heat and let sit until cooled to room temperature.\nPlace the jalapenos, stem side up, into the jar and pour enough cooled vinegar mixture over them to cover. Pack the cilantro sprigs into the jar. Cover and refrigerate for at least 24 hours and up to 4 days.",
      "description": "Perfect for a crowd, this moist pulled pork, slow cooked with chicken broth, cider vinegar and barbecue sauce, is topped with a crunchy slaw for an easy dish that will help both your kitchen and you keep your cool.",
      "serving_size" : 1,
      "calories" : 400,
    },
    {
      "name" : "Pulled Pork Sandwiches",
      "prep_time" : "30 min",
      "cook_time" : "10 min",
      "difficulty" : 3,
      "rating" : 5,
      "special_requirements" : null,
      "author" : "Andrew Galloway",
      "accessibility" : "PUBLIC",
      "type" : "meal",
      "source" : "pramodgobburi.com",
      "media": [
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/7/2/0/DG0104H_pulled-pork-sandiwch_s4x3.jpg.rend.hgtvcom.826.620.suffix/1435869335054.jpeg",
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/2/2/FNM_110112-Slow-Cooker-Pulled-Pork-Sandwiches-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1504040037237.jpeg",
      ],
      "ingredients": [
        "4 to 6 cups chicken stock or water",
        "1 (3 pound) boneless pork butt",
        "Salt and freshly ground black pepper",
        "BBQ Sauce, recipe follows",
        "8 to 12 soft buns with sesame seeds",
        "Pickled Jalapenos, recipe follows",
        "1 tablespoon canola oil",
        "1 small Spanish onion, finely diced",
        "1 jalapeno, finely diced",
        "2 tomatoes, coarsely chopped",
        "1 (15-ounce) can diced tomatoes",
        "2 cups cider vinegar",
        "1/4 cup honey",
        "1/2 cup light brown sugar",
        "1 tablespoon Worcestershire sauce",
        "Salt",
        "3 cups rice wine vinegar",
        "3 tablespoons sugar",
        "1 teaspoon white peppercorns",
        "1 teaspoon coriander seeds",
        "1 teaspoon mustard seeds",
        "1/2 teaspoon cumin seeds",
        "2 tablespoons kosher salt",
        "3 jalapenos, sliced in half lengthwise",
        "7 sprigs fresh cilantro"
      ],
      "instructions": "Special equipment: 1 (8-ounce) jar\nPreheat the grill to medium heat (the grill should maintain a constant temperature of 350 degrees F). Place a drip pan filled half-way with the chicken stock on the briquettes. Season the pork butt with salt and pepper and place on the grates of the grill over the drip pan. Close the cover of the grill and let the pork cook for 1 hour. Turn the pork over and continue grilling for 2 to 3 hours, or until it reaches an internal temperature of 160 degrees F. More chicken stock may be needed to refill the drip pan during grilling. Remove the pork from the grill and let rest for 15 minutes. When it is cool enough to handle, shred the pork into strands with your fingers. Add the shredded pork to the BBQ Sauce and serve on sandwich buns with the Pickled Jalapenos.\nHeat oil in a medium saucepan on the grates of the grill. Add the onion and jalapeno and cook until soft. Add the fresh tomatoes, canned tomatoes and juices, vinegar, honey, brown sugar and Worcestershire sauce, and cook until the sugar has completely melted and the sauce is slightly reduced and thickened. Season with salt, to taste. Add the shredded pork and stir to coat.\nCombine the vinegar, sugar, peppercorns, seeds, and salt in a medium saucepan and bring to a boil. Let boil for 2 minutes, and then remove from the heat and let sit until cooled to room temperature.\nPlace the jalapenos, stem side up, into the jar and pour enough cooled vinegar mixture over them to cover. Pack the cilantro sprigs into the jar. Cover and refrigerate for at least 24 hours and up to 4 days.",
      "description": "Perfect for a crowd, this moist pulled pork, slow cooked with chicken broth, cider vinegar and barbecue sauce, is topped with a crunchy slaw for an easy dish that will help both your kitchen and you keep your cool.",
      "serving_size" : 1,
      "calories" : 400,
    },
    {
      "name" : "Pulled Pork Sandwiches",
      "prep_time" : "30 min",
      "cook_time" : "10 min",
      "difficulty" : 3,
      "rating" : 5,
      "special_requirements" : null,
      "author" : "Andrew Galloway",
      "accessibility" : "PUBLIC",
      "type" : "meal",
      "source" : "pramodgobburi.com",
      "media": [
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/7/2/0/DG0104H_pulled-pork-sandiwch_s4x3.jpg.rend.hgtvcom.826.620.suffix/1435869335054.jpeg",
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/2/2/FNM_110112-Slow-Cooker-Pulled-Pork-Sandwiches-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1504040037237.jpeg",
      ],
      "ingredients": [
        "4 to 6 cups chicken stock or water",
        "1 (3 pound) boneless pork butt",
        "Salt and freshly ground black pepper",
        "BBQ Sauce, recipe follows",
        "8 to 12 soft buns with sesame seeds",
        "Pickled Jalapenos, recipe follows",
        "1 tablespoon canola oil",
        "1 small Spanish onion, finely diced",
        "1 jalapeno, finely diced",
        "2 tomatoes, coarsely chopped",
        "1 (15-ounce) can diced tomatoes",
        "2 cups cider vinegar",
        "1/4 cup honey",
        "1/2 cup light brown sugar",
        "1 tablespoon Worcestershire sauce",
        "Salt",
        "3 cups rice wine vinegar",
        "3 tablespoons sugar",
        "1 teaspoon white peppercorns",
        "1 teaspoon coriander seeds",
        "1 teaspoon mustard seeds",
        "1/2 teaspoon cumin seeds",
        "2 tablespoons kosher salt",
        "3 jalapenos, sliced in half lengthwise",
        "7 sprigs fresh cilantro"
      ],
      "instructions": "Special equipment: 1 (8-ounce) jar\nPreheat the grill to medium heat (the grill should maintain a constant temperature of 350 degrees F). Place a drip pan filled half-way with the chicken stock on the briquettes. Season the pork butt with salt and pepper and place on the grates of the grill over the drip pan. Close the cover of the grill and let the pork cook for 1 hour. Turn the pork over and continue grilling for 2 to 3 hours, or until it reaches an internal temperature of 160 degrees F. More chicken stock may be needed to refill the drip pan during grilling. Remove the pork from the grill and let rest for 15 minutes. When it is cool enough to handle, shred the pork into strands with your fingers. Add the shredded pork to the BBQ Sauce and serve on sandwich buns with the Pickled Jalapenos.\nHeat oil in a medium saucepan on the grates of the grill. Add the onion and jalapeno and cook until soft. Add the fresh tomatoes, canned tomatoes and juices, vinegar, honey, brown sugar and Worcestershire sauce, and cook until the sugar has completely melted and the sauce is slightly reduced and thickened. Season with salt, to taste. Add the shredded pork and stir to coat.\nCombine the vinegar, sugar, peppercorns, seeds, and salt in a medium saucepan and bring to a boil. Let boil for 2 minutes, and then remove from the heat and let sit until cooled to room temperature.\nPlace the jalapenos, stem side up, into the jar and pour enough cooled vinegar mixture over them to cover. Pack the cilantro sprigs into the jar. Cover and refrigerate for at least 24 hours and up to 4 days.",
      "description": "Perfect for a crowd, this moist pulled pork, slow cooked with chicken broth, cider vinegar and barbecue sauce, is topped with a crunchy slaw for an easy dish that will help both your kitchen and you keep your cool.",
      "serving_size" : 1,
      "calories" : 400,
    },
    {
      "name" : "Pulled Pork Sandwiches",
      "prep_time" : "30 min",
      "cook_time" : "10 min",
      "difficulty" : 3,
      "rating" : 5,
      "special_requirements" : null,
      "author" : "Andrew Galloway",
      "accessibility" : "PUBLIC",
      "type" : "meal",
      "source" : "pramodgobburi.com",
      "media": [
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/7/2/0/DG0104H_pulled-pork-sandiwch_s4x3.jpg.rend.hgtvcom.826.620.suffix/1435869335054.jpeg",
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/10/2/2/FNM_110112-Slow-Cooker-Pulled-Pork-Sandwiches-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1504040037237.jpeg",
      ],
      "ingredients": [
        "4 to 6 cups chicken stock or water",
        "1 (3 pound) boneless pork butt",
        "Salt and freshly ground black pepper",
        "BBQ Sauce, recipe follows",
        "8 to 12 soft buns with sesame seeds",
        "Pickled Jalapenos, recipe follows",
        "1 tablespoon canola oil",
        "1 small Spanish onion, finely diced",
        "1 jalapeno, finely diced",
        "2 tomatoes, coarsely chopped",
        "1 (15-ounce) can diced tomatoes",
        "2 cups cider vinegar",
        "1/4 cup honey",
        "1/2 cup light brown sugar",
        "1 tablespoon Worcestershire sauce",
        "Salt",
        "3 cups rice wine vinegar",
        "3 tablespoons sugar",
        "1 teaspoon white peppercorns",
        "1 teaspoon coriander seeds",
        "1 teaspoon mustard seeds",
        "1/2 teaspoon cumin seeds",
        "2 tablespoons kosher salt",
        "3 jalapenos, sliced in half lengthwise",
        "7 sprigs fresh cilantro"
      ],
      "instructions": "Special equipment: 1 (8-ounce) jar\nPreheat the grill to medium heat (the grill should maintain a constant temperature of 350 degrees F). Place a drip pan filled half-way with the chicken stock on the briquettes. Season the pork butt with salt and pepper and place on the grates of the grill over the drip pan. Close the cover of the grill and let the pork cook for 1 hour. Turn the pork over and continue grilling for 2 to 3 hours, or until it reaches an internal temperature of 160 degrees F. More chicken stock may be needed to refill the drip pan during grilling. Remove the pork from the grill and let rest for 15 minutes. When it is cool enough to handle, shred the pork into strands with your fingers. Add the shredded pork to the BBQ Sauce and serve on sandwich buns with the Pickled Jalapenos.\nHeat oil in a medium saucepan on the grates of the grill. Add the onion and jalapeno and cook until soft. Add the fresh tomatoes, canned tomatoes and juices, vinegar, honey, brown sugar and Worcestershire sauce, and cook until the sugar has completely melted and the sauce is slightly reduced and thickened. Season with salt, to taste. Add the shredded pork and stir to coat.\nCombine the vinegar, sugar, peppercorns, seeds, and salt in a medium saucepan and bring to a boil. Let boil for 2 minutes, and then remove from the heat and let sit until cooled to room temperature.\nPlace the jalapenos, stem side up, into the jar and pour enough cooled vinegar mixture over them to cover. Pack the cilantro sprigs into the jar. Cover and refrigerate for at least 24 hours and up to 4 days.",
      "description": "Perfect for a crowd, this moist pulled pork, slow cooked with chicken broth, cider vinegar and barbecue sauce, is topped with a crunchy slaw for an easy dish that will help both your kitchen and you keep your cool.",
      "serving_size" : 1,
      "calories" : 400,
    }
  ]);

  return (
    <Container>
      <h3 className={css(styles.title)}>All Recipes</h3>
      <hr style={{marginBottom: 30}}/>
      <div className={css(styles.cardContainer)}>
        {
          recipes.map((recipe, index) => (
            <RecipeCard recipe={recipes[0]} index={index} length={recipes.length} {...props} />
          ))
        }
      </div>
    </Container>
  );
}


const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    marginTop: 30
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
  }
})

export default Recipes;