import {
	createBrowserRouter,
} from "react-router-dom";
import { url } from "src/constants";
import Add from "src/pages/add";
import Edit from "src/pages/edit";
import Library from 'src/pages/library'

const router = createBrowserRouter([
	{
		path: url.home,
		element: <Library />
	},
	{
		path: url.add,
		element: <Add />
	}, 
	{
		path: url.edit,
		element: <Edit />,
	},
]);

export default router;