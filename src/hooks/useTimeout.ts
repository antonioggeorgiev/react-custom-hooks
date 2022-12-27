import * as React from "react";
import { useEffect, useRef, useCallback } from "react";

export const useTimeout = (cb: Function, timeout: number) => {
	const timeoutRef = useRef<number>();

	const set = useCallback(() => {
		timeoutRef.current = setTimeout(cb, timeout);
	}, [timeout]);

	const clear = useCallback(() => {
		clearTimeout(timeoutRef.current);
	}, []);

	const reset = useCallback(() => {
		clear();
		set();
	}, [clear, set]);

	useEffect(() => {
		set();
		return clear;
	}, [set, clear, timeout]);

	return {
		clear,
		reset,
	};
};
