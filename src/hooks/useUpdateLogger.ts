import * as React from "react";
import { useEffect } from "react";

export const useUpdateLogger = (value: any) => {
	useEffect(() => {
		console.log(value);
	}, [value]);
};
