// src/components/LiveCodeBlock.jsx
import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const code = `
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
render(<Counter />);
`;

function LiveCodeBlock() {
  return (
    <div style={{ background: "#1e1e1e", padding: "1rem", borderRadius: "8px" }}>
      <LiveProvider code={code} noInline={false}>
        <LiveEditor style={{ backgroundColor: "#2d2d2d", fontSize: "14px" }} />
        <LiveError style={{ color: "red" }} />
        <div style={{ padding: "1rem", backgroundColor: "#222", marginTop: "1rem" }}>
          <LivePreview />
        </div>
      </LiveProvider>
    </div>
  );
}

export default LiveCodeBlock;
