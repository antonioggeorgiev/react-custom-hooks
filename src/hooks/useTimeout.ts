import * as React from "react";
import { useEffect, useRef, useCallback } from "react";

export const useTimeout = (cb: Function, timeout: number) => {
	const timeoutRef = useRef<NodeJS.Timeout>();
	const callbackRef = useRef(cb);

	useEffect(() => {
		callbackRef.current = cb;
	}, [cb]);

	const set = useCallback(() => {
		timeoutRef.current = setTimeout(() => callbackRef.current(), timeout);
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
