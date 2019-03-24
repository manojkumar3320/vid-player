import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {

	transform(items: any[], searchString: string): any[] {
		searchString = searchString.toLowerCase();
		if (!items) {
			return [];
		}

		if (searchString === null) {
			return items;
		}
		return items.filter(singleItem =>
			(
				(
					(searchString != null) &&
					(
						singleItem['title'].toLowerCase().includes(searchString)
					)
				)
				|| (searchString == null)
			)
		);
		}


}
