import { PropsWithChildren, createContext, useState } from "react";
import { DataType, ProductType } from "../types/TypesDefine";

export const GlobalContext = createContext<DataType>({
	data: [],
	setData: () => {},
});

export const GlobalProvider = ({ children }: PropsWithChildren) => {
	const [data, setData] = useState<Array<ProductType>>([]);
	return (
		<GlobalContext.Provider
			value={{
				data,
				setData,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
