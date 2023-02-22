import React from 'react'
import { Button, Card } from 'antd';

function FoodBox( {food, listDelete} ) {
  
  const deleteCard = () => {
    listDelete(food.name)
  }

  return (
    <Card
    title={food.name}
    style={{ width: 230, height: 300, margin: 10 }}
  >
    <img src={food.image} height={60} alt="food" />
    <p>Calories: {food.calories}</p>
    <p>Servings: {food.servings}</p>
    <p>
      <b>Total Calories: { food.calories * food.servings } </b> kcal
    </p>
    <Button onClick={ deleteCard } > Delete </Button>
  </Card>
  )
}

export default FoodBox