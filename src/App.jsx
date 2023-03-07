import React from "react";
import Navbar from "./components/Navbar";
import {auth} from'./firebase';
import {useAuthState} from'react-firebase-hooks/auth';
import Chat from "./components/Chat";

function App() {
  // JS
  const [user] = useAuthState(auth)
  // console.log(user);

  const style = {
    appContainer: `max-w-[728px] mx-auto text-center`,
    sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  };
  // HTML
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* {user ? <Chat /> : null} */}
        <Chat/>
      </section>
    </div>
  );
}

export default App;
