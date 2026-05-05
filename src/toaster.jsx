
  import { useState, useEffect } from "react";

function Toast({ message }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 3000);
  }, []);

  if (!visible) return null;

  return (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg animate-bounce-in flex items-center gap-3">
      {message}
    </div>
  );
}

export default Toast;