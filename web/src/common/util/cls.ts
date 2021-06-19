type TCls = {
  [key: string]: boolean;
}

export function cls(props: TCls, other?: string): string {
  const res = [];
  for (const propsKey in props) {
    if (props.hasOwnProperty(propsKey) && props[propsKey] === true) {
      res.push(propsKey);
    }
  }

  if (typeof other === 'string') {
    res.push(other);
  }

  return res.join('');
}
