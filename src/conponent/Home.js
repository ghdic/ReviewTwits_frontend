import React, {useContext} from 'react';
import {UserContext} from "./AuthProvider";

function Home() {
    const { user }  = useContext(UserContext);

  return (
    <div>

    </div>
  );
}

export default Home;