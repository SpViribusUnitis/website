import {type SchemaTypeDefinition} from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {vijestType} from './vijestType'
import {authorType} from './authorType'
import vijest from './vijest'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, categoryType, authorType, vijest],
}
