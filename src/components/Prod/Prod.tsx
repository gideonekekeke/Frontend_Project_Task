import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import useDataFetcher from "../../hooks/DataFetcher";
import { ViewProducts } from "../../utils/ApiCalls";
import { ProductType } from "../../types/TypesDefine";
import SearchAndSort from "../SearchAndSort";
import { GlobalContext } from "../../services/GlobalContext";

interface Iprops {
	itemsPerPage: number;
}

const Prod: React.FC<Iprops> = ({ itemsPerPage }) => {
	const { data, loading } = useDataFetcher(ViewProducts);
	const [currentPage, setCurrentPage] = useState(1);
	const [filteredData, setFilteredData] = useState<Array<ProductType>>([]);
	const { setData } = useContext(GlobalContext);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	// Initial load of data into filteredData
	useEffect(() => {
		setFilteredData(data);
	}, [data]);

	const updateFilteredData = (query: string) => {
		if (query === "") {
			setData(data);
		} else {
			const filtered = data.filter((product) =>
				product.title.toLowerCase().includes(query.toLowerCase()),
			);
			setFilteredData(filtered);
		}
		setCurrentPage(1);
	};

	const sortData = (order: string) => {
		const sortedData = [...filteredData];
		sortedData.sort((a, b) => {
			if (order === "asc") {
				// Sort in ascending order (low to high)
				return a.price - b.price;
			} else {
				// Sort in descending order (high to low)
				return b.price - a.price;
			}
		});
		setData(sortedData);
	};

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	return (
		<Container>
			<Head>
				<div>
					New Arrivals.{" "}
					<span style={{ color: "gray" }}>REY backpacks & bags</span>
				</div>
				<SearchAndSort onSort={sortData} onSearch={updateFilteredData} />
			</Head>
			<Holder>
				{loading ? (
					<div>Loading...</div>
				) : (
					<>
						{currentItems?.length >= 1 ? (
							<Holder>
								{currentItems?.map((props: ProductType) => (
									<Card id='product-price' key={props.id}>
										<MainImage>
											<ImageHold>
												<Image src={props?.image} />
											</ImageHold>
											<Title>{props?.title}</Title>
											<Desc>{props?.description}</Desc>
											<PriceHold>
												<Price>${props?.price}</Price>
												<Ratting>
													<AiFillStar
														style={{
															color: "gold",
															marginRight: "10px",
														}}
													/>
													4.2(87 reviews)
												</Ratting>
											</PriceHold>
										</MainImage>
									</Card>
								))}
							</Holder>
						) : (
							<div>No data Found</div>
						)}
					</>
				)}
			</Holder>

			<PaginationContainer>
				{Array.from({
					length: Math.ceil(filteredData.length / itemsPerPage),
				}).map((_, index) => (
					<div key={index} onClick={() => paginate(index + 1)}>
						<PageButton> {index + 1}</PageButton>
					</div>
				))}
			</PaginationContainer>
		</Container>
	);
};

export default Prod;

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const PageButton = styled.button`
	background: #007bff;
	color: white;
	border: 1px solid #ccc;
	padding: 5px 10px;
	margin: 5px;
	cursor: pointer;
	outline: none;
`;

const Card = styled.div`
	margin: 10px;
	width: 290px;
	overflow: hidden;

	flex-grow: 1;

	@media screen and (max-width: 425px) {
		width: 100%;
	}
`;
const ImageHold = styled.div`
	height: 250px;
	width: 100%;
	background-color: #f7f9fb;
	border-radius: 5px;

	@media screen and (max-width: 900px) {
		width: 100%;
	}
`;
const Title = styled.div`
	font-weight: 700;
	margin-bottom: 5px;
	margin-top: 10px;
	height: 20px;
	overflow: hidden;
`;
const Desc = styled.div`
	color: gray;
	height: 20px;
	overflow: hidden;
`;
const PriceHold = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5px;
	align-items: center;
`;
const Price = styled.div`
	height: 30px;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid green;
	font-weight: 600;
	color: green;
	border-radius: 5px;
`;
const Ratting = styled.div`
	font-size: 13px;
	color: gray;
	display: flex;

	align-items: center;
`;
const MainImage = styled.div``;
const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
`;

const Holder = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding-bottom: 20px;
	@media screen and (max-width: 1024px) {
		flex-wrap: wrap;
	}
`;

const Head = styled.div`
	font-size: 30px;
	margin-bottom: 10px;
	font-weight: 600;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

const Container = styled.div`
	margin-top: 30px;

	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 50px;
	overflow: hidden;
	margin-bottom: 50px;
	border-bottom: 1px solid silver;
	@media screen and (max-width: 900px) {
		padding: 20px;
	}
`;
