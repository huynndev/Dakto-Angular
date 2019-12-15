export class Category {
    ICArticleCategoryID: number;
    ICArticleCategoryName: string;
    ICArticleCategoryDesc: string;
    ICArticleCategorySortOrder: number;
    ICArticleCategoryIsShowMenu: boolean;
    ICArticleCategoryParentID: number
    child: Category[];
}
