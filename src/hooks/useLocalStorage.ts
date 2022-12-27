import React, { useEffect, useState } from "react";

const getValue = (key: string, initialValue: any | (() => any)) => {
	let savedValue = localStorage.getItem(key);

	if (savedValue !== null) return JSON.parse(savedValue);
	return initialValue instanceof Function ? initialValue() : initialValue;
};

export const useLocalStorage = (
	key: string,
	initialValue: any | (() => any)
) => {
	const [value, setValue] = useState(() => getValue(key, initialValue));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);

	return [value, setValue];
};
