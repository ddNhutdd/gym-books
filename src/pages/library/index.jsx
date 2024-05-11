import Table from 'src/components/table';
import css from './library.module.scss';
import Button from 'src/components/button';
import buttonType from 'src/components/button/buttonType';
import useRedirectPage from 'src/hooks/redirect-page';
import { url } from 'src/constants';

function Library() {
	const redirectPage = useRedirectPage();
	return (
		<div className={css.library}>
			<div className={css.library__titleContainer}>
				<h1>Library</h1>
				<Button
					type={buttonType.success}
					onClick={redirectPage.bind(null, url.add)}
				>
					Add a new Book
				</Button>
			</div>
			<div>
				<Table />
			</div>
		</div >
	)
}
export default Library