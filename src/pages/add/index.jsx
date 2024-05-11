import { useState } from "react";
import Button from "src/components/button"
import buttonHtmlType from "src/components/button/buttonHtmlType"
import buttonType from "src/components/button/buttonType"
import InputGroup from "src/components/input-group"
import { apiStatus, message, url } from "src/constants";
import useRedirectPage from "src/hooks/redirect-page";
import { addBook } from "src/services/books.services";

function Add() {

	const redirectPage = useRedirectPage();

	// input title
	const [titleValue, setTitleValue] = useState(``);
	const titleValueChangeHandle = (event) => {
		setTitleValue(event.target.value)
	}

	// input quantity
	const [quantityValue, setQuantityValue] = useState(``);
	const quantityValueChangeHandle = (event) => {
		setQuantityValue(event.target.value)
	}

	//form submit
	const [addBookStatus, setAddBookStatus] = useState(apiStatus.pending);
	const fetchAddBook = async (book) => {
		try {
			if (addBookStatus === apiStatus.fetching) return;
			setAddBookStatus(apiStatus.fetching);
			const resp = await addBook(book)
			console.log(resp)
			alert(message.success)
			setAddBookStatus(apiStatus.fullfilled);
			redirectPage(url.home)
		} catch (error) {
			console.log(error)
			setAddBookStatus(apiStatus.rejected)
		}

	}
	const formSubmitHandle = (event) => {
		event.preventDefault();
		const postData = {
			"title": titleValue,
			"quantity": quantityValue
		}
		fetchAddBook(postData)
	}

	return (
		<div>
			<h1>Add a new Book</h1>
			<form onSubmit={formSubmitHandle}>
				<div>
					<InputGroup
						id={`title`}
						label={`Title`}
						value={titleValue}
						onChange={titleValueChangeHandle}
					/>
				</div>
				<div>
					<InputGroup
						id={`quantity`}
						label={`Quantity`}
						value={quantityValue}
						onChange={quantityValueChangeHandle}
					/>
				</div>
				<Button
					type={buttonType.success}
					htmlType={buttonHtmlType.submit}
					disabled={addBookStatus === apiStatus.fetching}
				>
					Add
				</Button>
			</form>
		</div>
	)
}
export default Add