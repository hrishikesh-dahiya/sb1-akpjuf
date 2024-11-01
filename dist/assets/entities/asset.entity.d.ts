export declare class Asset {
    id: string;
    title: string;
    description: string;
    type: 'video' | 'preview' | 'thumbnail';
    url: string;
    duration: number;
    metadata: Record<string, any>;
    createdAt: Date;
}
