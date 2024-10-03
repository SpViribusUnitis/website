import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('vijest').title('Kreiraj Vijest'),
      S.divider(),
      S.documentTypeListItem('category').title('Kategorija Vijesti'),
      S.documentTypeListItem('author').title('Autori'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category', 'author', 'vijest'].includes(item.getId()!),
      ),
    ])
