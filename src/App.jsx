import { useState } from 'react'
import './App.css'
import { Row, Divider, Button, Col, Card, Input } from 'antd';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodsState, setFoodsState] = useState(foods) // set - method to change

  const newFood = (added) => {
    const addedFood = [added, ...foodsState];
    setFoodsState(addedFood);
  }

  return (
    <div className="App">
                {/* Display Add Food component here */}
          <AddFoodForm newFood = {newFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodsState.map( (food) => {
            return (
              <Col>
                <FoodBox food={food} />
              </Col>
            )

        } )}
      </Row>

    </div>
  )
}

export default App

