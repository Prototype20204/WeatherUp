import { createContext, useMemo, useReducer } from 'react';

const initialState = {
	data: [],
	searchText: '',
	error: '',
	currentLocation: 'Current Location',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_CURRENT_LOCATION':
			return {
				...state,
				currentLocation: action.currentLocation,
			};
		case 'WEATHER_DATA':
			return {
				...state,
				data: action.weatherData,
			};
		case 'SET_ERROR':
			return {
				...state,
				error: action.error,
			};

		default:
			return state;
	}
};

export const WeatherDataContext = createContext();

export const WeatherDataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const productValue = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);

	return (
		<WeatherDataContext.Provider value={productValue}>
			{children}
		</WeatherDataContext.Provider>
	);
};
