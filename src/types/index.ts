export interface Asset {
  id: string;
  title: string;
  imageUrl: string;
  creator: {
    name: string;
    id: string;
  };
  price?: number;
  ownershipType?: string;
}

export interface Collection {
  id: string;
  title: string;
  imageUrl: string;
  creator: {
    name: string;
    id: string;
  };
}

export interface UploadAssetForm {
  title: string;
  description: string;
  price: number;
  collection: string;
  rights: string;
  file?: File;
} 