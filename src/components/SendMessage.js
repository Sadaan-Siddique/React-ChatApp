import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useRef } from "react";
import { auth, db } from "../firebase";

function SendMessage({ scroll }) {
  const input = useRef();
  console.log(auth.currentUser.photoURL);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please Type Something First");
      return;
    }

    const { uid, photoURL, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input.current.value,
      name: displayName,
      uid,
      photo: photoURL,
      timestamp: serverTimestamp(),
    });
    input.current.value = '';
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <form onSubmit={sendMessage}>
        <div className="main container messageSentInputBg mt-1 mb-5 border rounded-4">
          <div className="form-group has-search mb-1 d-flex justify-content-end">
            <label style={{position:'relative',top:'5px'}} className="form-label fw-bold" htmlFor="messageSendInput">
              Message:
            </label>
            <input
              type="text"
              className="form-control mb-3 ms-2"
              id="messageSendInput"
              placeholder="Type Something"
              ref={input}
            // onChange={(e) => setInput(e.target.value)}
            />
            <span
              className="fa fa-paper-plane messageSendButton"
              onClick={sendMessage}
            ></span>
          </div>

        </div>
      </form>
    </>
  );
}

export default SendMessage;
