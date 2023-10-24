import React, { useState } from "react";
import styled from "styled-components";

const SearchAndSortContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
`;

const SearchInput = styled.input`
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	flex-grow: 1;
	margin-right: 10px;
	font-size: 14px;
`;

const SortSelect = styled.select`
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	background-color: #fff;
	font-size: 14px;
`;

const Option = styled.option`
	font-size: 14px;
`;

interface Iprops {
	onSearch: (query: string) => void;
	onSort: (order: string) => void;
}

const SearchAndSort: React.FC<Iprops> = ({ onSearch, onSort }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOrder, setSortOrder] = useState<string>("asc");

	let searchTimeout:any;

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);

		// Clear searchTimeout
		if (searchTimeout) {
			clearTimeout(searchTimeout);
		}

		// Setting a timeout function to trigger the search after a delay
		searchTimeout = setTimeout(() => {
			onSearch(searchQuery);
		}, 1000)
	};

	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOrder(e.target.value);
		onSort(e.target.value);
	};

	return (
		<SearchAndSortContainer>
			<SearchInput
				type='text'
				placeholder='Search Product name...'
				value={searchQuery}
				onChange={handleSearchChange}
			/>
			<SortSelect value={sortOrder} onChange={handleSortChange}>
				<Option value='asc'>Low to High</Option>
				<Option value='desc'>High to Low</Option>
			</SortSelect>
		</SearchAndSortContainer>
	);
};

export default SearchAndSort;
