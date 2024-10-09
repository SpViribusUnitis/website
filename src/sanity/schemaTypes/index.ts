import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {vijestType} from './vijestType'
import {authorType} from './authorType'
import vijest from './vijest'
import sponzor from './sponzor'
import youtube from './youtube'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, categoryType, authorType, vijest, sponzor, youtube],
}
