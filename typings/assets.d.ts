declare interface SVGIcon {
  id: string;
  url: string;
  viewBox: string;
}

declare module ".svg" {
  const content: SVGIcon;

  export default content;
}

declare module "assets/icons/.svg" {
  const path: string;

  export default path;
}
