import { Pipe, PipeTransform } from '@angular/core';

//import { Book } from './book';

@Pipe({
    name: 'businessfilter',
    pure: false
})
export class FilterBusinessPipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: any) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Business} business The book to compare to the filter.
   * @param {Business} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(business: any, filter: any): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (business[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (business[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
