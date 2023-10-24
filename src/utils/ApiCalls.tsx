import Instance from "./AxiosConfig";

export const ViewProducts = async () => {
	try {
		const response = await Instance.get("/products");
		return response;
	} catch (err) {
		return err;
	}
};
