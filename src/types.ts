declare global {
  interface Window {
    google: any;
    [key: string]: any;
  }
}

export interface ISkeletonProps extends IUseSkeletonValueProps {
  loaderStyle: {};
  numberOfItems?: number;
  direction?: 'row' | 'column';
}

export interface IUseSkeletonValueProps {
  speed?: number;
  targetOpacityValue?: number;
}
