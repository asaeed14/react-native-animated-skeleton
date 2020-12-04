declare global {
  interface Window {
    google: any;
    [key: string]: any;
  }
}

export interface ISkeletonProps {
  loaderStyle: {};
  numberOfItems?: number;
  direction?: 'row' | 'column';
}
