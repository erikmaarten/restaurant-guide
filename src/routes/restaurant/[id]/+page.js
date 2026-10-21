import { error } from '@sveltejs/kit';
import { restaurants } from '#lib/restaurants';
import { restaurantDetails } from '#lib/restaurant-details';

export function load({ params }) {
	const restaurant = restaurants.find((r) => r.id === params.id);
	const details = restaurantDetails[params.id];

	if (!restaurant || !details) {
		error(404, 'Restaurant not found');
	}

	return { restaurant, details };
}
