import { useState } from 'react'
import './App.css'
import { Row, Divider, Button, Col, Card, Input } from 'antd';
import foods from './foods.json'

function App() {
  const [foodsState, setFoodsState] = useState(foods) // set - method to change

  return (
    <div className="App">
                {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodsState.map( (food) => {
            return (
              <Col>
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
                  <Button type="primary"> Delete </Button>
                </Card>
              </Col>
            )

        } )}
      </Row>

    </div>
  )
}

export default App

