import { useRef, useState } from "react";
import { apiStatus } from "src/constants";

const useCallApi = (immediately, functionName, ...params) => {
	const [mainData, setMainData] = useState();
	const [error, setError] = useState();
	const [status, setStatus] = useState(apiStatus.pending);
	const firstLoad = useRef(false);

	async function call(...newParams) {
		try {
			if (status === apiStatus.fetching) {
				return;
			}
			setStatus(apiStatus.fetching);
			const resp = await functionName(newParams);
			setMainData(resp);
			setError(undefined);
			setStatus(apiStatus.fullfilled)

		} catch (error) {
			setError(error)
			setStatus(apiStatus.rejected)
		}
	}

	if (immediately && !firstLoad.current) {
		firstLoad.current = true;
		call(...params)
	}

	return [mainData, error, status, call];
}

export default useCallApi;