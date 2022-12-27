import * as React from "react";
import { useEffect, useState } from "react";
import { useTimeout } from "./useTimeout";

export const useDebounce = (
	cb: Function,
	timeout: number,
	dependencyArray: React.DependencyList
) => {
	const { reset, clear } = useTimeout(cb, timeout);

	useEffect(() => {
		reset();
	}, [...dependencyArray, reset]);

	useEffect(clear, []);
};
