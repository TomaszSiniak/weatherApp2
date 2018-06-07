import React from 'react';

import { addCity } from '../utils/js/storage';

const AddCityForm = () => {
  return (
    <div>
      <form onSubmit={(e) => addCity(e)}>
        <input type="text" name="city_name" />
        <button>Check Weather</button>
      </form>
    </div>
  );
};


export default AddCityForm;
