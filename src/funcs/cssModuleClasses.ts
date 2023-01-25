interface Style {
  [cn: string]: string;
}

export default function cssModuleClasses(style: Style, names: string[]): string {
  return names
    .map((nm: string) => style[nm])
    .filter((nm: string) => nm)
    .join(' ');
}
