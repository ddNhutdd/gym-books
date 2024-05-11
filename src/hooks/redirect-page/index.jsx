import { useNavigate } from "react-router-dom"

const useRedirectPage = () => {
	const navigate = useNavigate();
	const redirectPage = (page) => {
		navigate(page)
	}

	return redirectPage;
}

export default useRedirectPage;