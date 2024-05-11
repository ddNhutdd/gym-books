import Button from "src/components/button"
import buttonType from "src/components/button/buttonType"
import PropTypes from 'prop-types'
import { useState } from "react";
import { apiStatus, message } from "src/constants";
import { deleteBook } from "src/services/books.services";

function DeleteSection(props) {
	const {
		id,
		fetchAllBook
	} = props;

	// delete
	const [apiDeleteStatus, setApiDeleteStatus] = useState(apiStatus.pending);
	const deleteClickHandle = () => {
		try {
			if (apiDeleteStatus === apiStatus.fetching) return;
			setApiDeleteStatus(apiStatus.fetching);
			deleteBook(id);
			setApiDeleteStatus(apiStatus.fullfilled);
			fetchAllBook();
			alert(message.success);
		} catch (error) {
			console.log(error);
			setApiDeleteStatus(apiStatus.rejected);
		}
	}

	return (
		<Button
			type={buttonType.danger}
			onClick={deleteClickHandle}
			disabled={apiDeleteStatus === apiStatus.fetching}
		>
			Delete
		</Button>
	)
}
export default DeleteSection

DeleteSection.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	fetchAllBook: PropTypes.func
}
