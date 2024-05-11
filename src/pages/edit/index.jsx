import Button from "src/components/button"
import buttonHtmlType from "src/components/button/buttonHtmlType"
import buttonType from "src/components/button/buttonType"
import InputGroup from "src/components/input-group"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useCallApi from "src/hooks/call-api"
import { getBookById, updateBook } from "src/services/books.services"
import { apiStatus, message, url } from "src/constants"
import useRedirectPage from "src/hooks/redirect-page"

function Edit() {
	const { id } = useParams();
	const redirectPage = useRedirectPage();

	// load data
	const fetchBookById = () => {
		return getBookById(id);
	}
	const [mainData, , status] = useCallApi(true, fetchBookById);
	useEffect(() => {
		if (mainData) {
			const selectedBook = mainData?.[`data`];
			setTitleValue(selectedBook?.['title']);
			setQuantityValue(selectedBook?.['quantity'].toString());
		}
	}, [mainData])

	// title
	const [titleValue, setTitleValue] = useState('');
	const titleChangeHandle = (event) => {
		setTitleValue(event.target.value);
	}

	// quantity
	const [quantityValue, setQuantityValue] = useState('');
	const quantityChangeHandle = (event) => {
		setQuantityValue(event.target.value)
	}

	//save 
	const [updateStatus, setUpdateStatus] = useState(apiStatus.pending);
	const submitHandle = async (event) => {
		event.preventDefault();
		try {
			if (updateStatus === apiStatus.fetching) {
				return;
			}
			setUpdateStatus(apiStatus.fetching);
			const book = {
				title: titleValue,
				quantity: quantityValue
			}
			await updateBook(id, book);
			alert(message.success);
			redirectPage(url.home);
			setUpdateStatus(apiStatus.fullfilled);
		} catch (error) {
			console.log(error);
			setUpdateStatus(apiStatus.rejected);
		}



	}

	if (status === apiStatus.fetching) {
		return <div>Loading</div>
	}
	return (
		<div>
			<h1>Add a new Book</h1>
			<form onSubmit={submitHandle}>
				<div>
					<InputGroup
						id={'title'}
						lable={`Title`}
						value={titleValue}
						onChange={titleChangeHandle}
					/>
				</div>
				<div>
					<InputGroup
						id={`quantity`}
						lable={`Quantity`}
						value={quantityValue}
						onChange={quantityChangeHandle}
					/>
				</div>
				<Button
					type={buttonType.success}
					htmlType={buttonHtmlType.submit}
					disabled={updateStatus === apiStatus.fetching}
				>
					Save
				</Button>
			</form>
		</div>
	)
}
export default Edit