import {Multiselect} from 'multiselect-react-dropdown';
import React from 'react';


function Ddown() {
    
   var dados = [];

    const EMood = [
      {Topic: 'Anxiety', id: 1},
      {Topic: 'Sleep Quality', id: 2},
      {Topic: 'Sleep Regulation' , id: 3},
      {Topic: 'Cholesterol and Triglycerides', id: 4},
      {Topic: 'Insulin/Glucose Metabolism', id: 5 },
      {Topic: 'Symptoms of Osteoarthritis' , id: 6},
      {Topic: 'Cholesterol and Triglycerides', id: 7},
      {Topic: 'Insulin/Glucose Metabolism', id: 8 },
      {Topic: 'Symptoms of Osteoarthritis' , id: 9},
      {Topic: 'Cholesterol and Triglycerides', id: 10},
      {Topic: 'Insulin/Glucose Metabolism', id: 11},
      {Topic: 'Symptoms of Osteoarthritis' , id: 12}
    ]

    dados.push(EMood); 

  return (
    
    <div className="Ddown">
       <Multiselect options = {dados[0]} displayValue="Topic"/>
    </div>   
  );
}

export default Ddown;
