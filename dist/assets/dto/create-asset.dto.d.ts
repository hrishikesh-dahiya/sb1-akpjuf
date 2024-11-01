export declare class CreateAssetDto {
    title: string;
    description: string;
    type: 'video' | 'preview' | 'thumbnail';
    url: string;
    duration?: number;
    metadata?: Record<string, any>;
}
