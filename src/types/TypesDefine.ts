export type ProductType = {
	title: string;
	description: string;
	price: number;
	id: number;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};


export type DataType = {
	data: ProductType[];
	setData: React.Dispatch<React.SetStateAction<ProductType[]>>;
};