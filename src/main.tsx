import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Index from "./routes/Allroutes.tsx";
import { GlobalProvider } from "./services/GlobalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalProvider>
			<RouterProvider router={Index} />
		</GlobalProvider>
	</React.StrictMode>,
);
