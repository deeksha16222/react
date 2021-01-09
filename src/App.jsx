import React, { useState } from 'react';

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState();

 return(
  <>

  <h1 class="title"> {newTime} </h1>
  <button> get time </button>

  </>
);
};

export default App;
