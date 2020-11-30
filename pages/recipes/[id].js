import React, { useState } from "react";
import { StyleSheet, css } from 'aphrodite';
import { Steps } from 'antd';
import { Container } from 'reactstrap';

import RecipeIngredient from '../../components/RecipeIngredient';
import RecipeNutrition from "../../components/RecipeNutrition";
import RecipeInfoBar from "../../components/RecipeInfoBar";
import RecipeTagBar from "../../components/RecipeTagBar";

const { Step } = Steps;

const Recipe = props => {
  const [recipe, setRecipe] = useState(
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
  );

  const generateUrls = (media) => {
    const urls = [];
    media.forEach(m => {
      urls.push(
        { url: m }
      )
    });
    return urls;
  }

  return (
    <Container>
      <div className={css(styles.info_container)}>
        <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center', float: 'left', width: '100%', paddingLeft: 30}}>
          {recipe.media.length > 1 ? (
            <img className={css(styles.recipe_img)} src={recipe.media[0]} alt="recipe_img" />
          ) : (
            <img className={css(styles.recipe_img)} src={recipe.media[0]} alt="recipe_img" />
          )}
          
          <div>
            <RecipeTagBar tags={['Meal', 'Sandwich', 'Pork', 'BBQ']} />
            <h1>
              {recipe.name}
            </h1>
            <h6 className={css(styles.description)}>
              {recipe.description}
            </h6>
            <RecipeInfoBar time={"30 min"} difficulty={"4"} serving={"2"} source={recipe.source} />
          </div>
        </div>
      </div>
      <div className={css(styles.subContainer)}>
        <div className={css(styles.left)}>
          <div className={css(styles.ingredients)}>
            <div className={css(styles.greyContainer)}>
              <p className={css(styles.ingredientsHeader)}>Ingredients:</p>
              {recipe.ingredients.map((ingredient, idx) => (
                <div>
                  <RecipeIngredient index={idx} length={recipe.ingredients.length} ingredient={ingredient} />
                </div>
              ))}
            </div>
            
          </div>
          <div className={css(styles.ingredients)}>
            <div className={css(styles.nutritionContainer)}>
              <p className={css(styles.ingredientsHeader)}>Nutrition: (per serving)</p>
              <RecipeNutrition index={0} length={2} name="Calories" value={recipe.calories} />
              <RecipeNutrition index={1} length={2} name="Fats" value={recipe.calories} />
            </div>
          </div>
        </div>
        <div className={css(styles.right)}>
          <h3>Steps</h3>
          <hr/>
          <div className={css(styles.stepsContainer)}>
          <Steps direction="vertical">
            {
              recipe.instructions.split('\n').map((s) => (
                s.split('. ').map(ns => (
                  <Step status="process" title={ns + '.'} />
                ))
              ))
            }
          </Steps>
          </div>
        </div>
      </div>
    </Container>
      
  );
}


const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    // textAlign: 'right',
    paddingRight: 10,
  },
  info_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 50,
  },
  recipe_img: {
    height: 'auto',
    width: 500,
    marginRight: 30,
  },
  ingredients: {
    paddingLeft: 30,
    marginBottom: 20,
  },
  greyContainer: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    borderRadius: 20,
    width: 320,
    float: 'left',
  },
  nutritionContainer: {
    padding: 20,
    border: '1px solid #808080',
    borderRadius: 5,
    width: 320,
    float: 'left',
  },
  ingredientsHeader: {
    color: 'black',
    fontWeight: 200,
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'castoro'
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 7,
    paddingLeft: 20,
    minHeight: '30vh'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    lineHeight: 1.6,
    marginBottom: 20,
    marginTop: 10,
  },
  stepsContainer: {
    overflow: 'auto',
    flex: 1,
    marginRight: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    // minHeight: '100%'
  }
})

export default Recipe;