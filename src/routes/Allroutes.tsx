import { createBrowserRouter } from "react-router-dom";
import Weblayouts from "../components/layouts/Weblayouts";
import HomeScreen from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <Weblayouts />,
		children: [
			{
				index: true,
				element: <HomeScreen />,
			},
			{
				path: "products",
				element: <ProductPage />,
			},
		],
	},
]);

export default Index;
