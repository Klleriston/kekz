export interface Article {
    id: number;
    title: string;
    description: string;
    url: string;
    cover_image: string | null;
    published_at: string;
    public_reactions_count: number;
    tag_list: string[];
}