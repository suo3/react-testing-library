import * as React from "react";
import fetchDrinks from "./api/fetchDrinks";
import { Button, Card, Col, Form } from "react-bootstrap";

const DrinkSearch = () => {
  const [drinks, setDrinks] = React.useState([]);
  const [drinkQuery, setDrinkQuery] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleDrinkQuery = async (e) => {
    e.preventDefault();
    if (drinkQuery) {
      try {
        const data = await fetchDrinks(drinkQuery);

        setDrinks(data);
      } catch (error) {
        setError(error);
      }
    }

    setDrinkQuery("");
  };

  const drinkResults = () => {
    const ingredientList = (drink) => {
      const ingredients = [];
      const maxIngredients = 15;
      for (let i = 1; i <= maxIngredients; i++) {
        const ingredient = drink["strIngredient" + i];
        if (ingredient) {
          ingredients.push(ingredient);
        }
      }
      return ingredients;
    };

    return drinks.map((drink) => {
      return (
        <Card
          key={drink.idDrink}
          className='card m-2 col-md-6'
          style={{ width: "20rem" }}>
          <img
            src={drink.strDrinkThumb}
            className='card-img-top'
            alt={drink.strDrink}
          />
          <Card.Body>
            <h5 className='card-title text-center'>{drink.strDrink}</h5>
            <h6 className='text-center font-weight-bold'>Ingredients</h6>
            <div className='d-flex flex-wrap justify-content-center border-top'>
              {ingredientList(drink).map((ingredient, index) => (
                <div className='p-1' key={ingredient + index}>
                  {ingredient}
                </div>
              ))}
            </div>
            <h6 className='text-center font-weight-bold'>Instructions</h6>
            <p className='card-text border-top'>{drink.strInstructions}</p>
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <Col md={12}>
      <Card>
        <h3>Search Drinks</h3>
        <Form
          className='form-group m-auto w-100 pt-2'
          onSubmit={handleDrinkQuery}>
          <Form.Control
            className='form-control'
            placeholder='search for a drink....'
            type='search'
            value={drinkQuery}
            onChange={(event) => setDrinkQuery(event.target.value)}
          />
          <Button
            className='btn btn-primary mt-1 w-100 btn-block'
            type='submit'>
            Search
          </Button>
        </Form>
        {drinks && <div className='d-flex flex-wrap row'>{drinkResults()}</div>}
        {!drinks && <h5 className='text-center mt-5'>🍹 No drinks found 🍹</h5>}
        {error && (
          <h5 className='text-center mt-5'>🛑 Service unavailable 🛑</h5>
        )}
      </Card>
    </Col>
  );
};

export default DrinkSearch;
