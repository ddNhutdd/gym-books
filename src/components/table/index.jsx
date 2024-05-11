import useCallApi from 'src/hooks/call-api';
import Button from '../button';
import buttonType from '../button/buttonType';
import css from './table.module.scss';
import { getAllBook } from 'src/services/books.services';
import { apiStatus, url } from 'src/constants';
import useRedirectPage from 'src/hooks/redirect-page';
import DeleteSection from './delete-section';

function Table() {

	// load data
	const fetchAllBook = () => {
		return getAllBook();
	}
	const [mainData, error, status,] = useCallApi(true, fetchAllBook);
	const renderMainData = (list) => {
		return list?.map(book => (
			<tr key={book.id}>
				<td>{book?.title}</td>
				<td>{book?.quantity}</td>
				<td>
					<div className={css.table__actionCell}>
						<Button
							type={buttonType.primary}
							onClick={redirectPage.bind(null, url.edit.replace(":id", book?.id))}
						>
							Edit
						</Button>
						<DeleteSection fetchAllBook={fetchAllBook} id={book?.id} />
					</div>
				</td>
			</tr>
		))
	}

	// chuyển trang
	const redirectPage = useRedirectPage();

	return (
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Quality</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				{
					mainData && <tbody>
						{renderMainData(mainData?.[`data`])}
					</tbody>
				}
				{
					error && <tbody>
						<tr>
							<td colSpan={3}>
								Error
							</td>
						</tr>
					</tbody>
				}
				{
					status === apiStatus.fetching && <tbody>
						<tr>
							<td colSpan={3}>
								Loading ...
							</td>
						</tr>
					</tbody>
				}

			</table>
		</div >
	)
}
export default Table