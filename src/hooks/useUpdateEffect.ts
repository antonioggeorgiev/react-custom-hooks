import * as React from "react";
import { useRef, useEffect } from "react";

export const useUpdateEffect = (
	cb: Function,
	dependencyArray?: React.DependencyList
) => {
	const firstRenderRef = useRef(true);

	useEffect(() => {
		if (firstRenderRef.current) {
			firstRenderRef.current = false;
			return;
		}
		cb();
	}, dependencyArray);
};
