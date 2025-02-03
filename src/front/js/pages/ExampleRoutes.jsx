import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const ExampleRoutes = () => {
  // Code JS
  const navigate = useNavigate()

  const handleExampleState = () => {
    // muchas instrucciones de JS
    // al finalizar quiro ir a otro componente
    navigate('/example-state');
  }
  
  return (
    <div className="container">
      <div>
        <Link to='/simple-counter'>
          <span className="btn btn-info me-2">Simple Counter</span>
        </Link>
        <Link to={'/example-state'}>
          <span className="btn btn-dark">Example State</span>
        </Link>
      </div>

      <div>
        <button onClick={handleExampleState} type="button" className="btn btn-dark">Example State</button>
      </div>

    </div>
  )
}
