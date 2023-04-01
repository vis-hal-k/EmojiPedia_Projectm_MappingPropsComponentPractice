import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import Head from "./Heading";
function createShort(conn) {
  return (
    <Entry
      key={conn.id}
      emoji={conn.emoji}
      name={conn.name}
      des={conn.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <Head />
      <dl className="dictionary">{emojipedia.map(createShort)}</dl>
    </div>
  );
}

export default App;
