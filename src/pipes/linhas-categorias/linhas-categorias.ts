import { Pipe, PipeTransform } from '@angular/core';

import { LinhaFeature } from '../../providers/linhaFeature';
import { Linha } from '../../providers/linha';

/**
 * Generated class for the LinhasCategoriasPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'linhasCategorias',
})
export class LinhasCategoriasPipe implements PipeTransform {
  
  transform(items, terms: string): LinhaFeature[]|Linha[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      if(it.properties)  return it.properties.categoria.toLowerCase().includes(terms);
      else if(it.categoria) return it.categoria.toLowerCase().includes(terms);
    });
  }

}
