import React from "react";
import Prod from "../components/Prod/Prod";

const ProductPage:React.FC = () => {
	return (
		<div>
			<Prod  itemsPerPage={8}/>
		</div>
	);
};

export default ProductPage;
