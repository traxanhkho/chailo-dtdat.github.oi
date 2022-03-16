import lodash from 'lodash';

// output : new array . 

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return lodash(items).slice(startIndex).take(pageSize).value();
}