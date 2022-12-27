import * as React from "react";
import { useState } from "react";

export const useArray = <T>(defaultValue?: T[]) => {
	const [array, setArray] = useState(() =>
		defaultValue ? defaultValue : []
	);

	const set = (array: T[]) => setArray(array);

	const push = (element: T) => setArray((prev) => [...prev, element]);

	const filter = (
		predicate: (value: T, index: number, array: T[]) => boolean
	) => setArray((prev) => prev.filter(predicate));

	const update = (index: number, value: T) =>
		setArray((prev) => {
			return [
				...prev.slice(0, index - 1),
				value,
				...prev.slice(index + 1, prev.length),
			];
		});

	const clear = () => {
		setArray([]);
	};

	const remove = (index: number) =>
		setArray((prev) => {
			return [
				...prev.slice(0, index),
				...prev.slice(index + 1, prev.length),
			];
		});

	return {
		array,
		set,
		push,
		filter,
		update,
		clear,
		remove,
	};
};
