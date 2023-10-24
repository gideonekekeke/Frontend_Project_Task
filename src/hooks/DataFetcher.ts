import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../services/GlobalContext";

function useDataFetcher(dataFn : any) {
	const {data, setData} = useContext(GlobalContext)
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await dataFn();
				setData(response?.data);
				setLoading(false);
			} catch (error: any) {
				setError(error);
				setLoading(false);
			}
		};
		let mounted = true;

		if (mounted) {
			fetchData();
		}

		return () => {
			mounted = false;
		};
	}, [dataFn]);

	return { data, loading, error };
}

export default useDataFetcher;
