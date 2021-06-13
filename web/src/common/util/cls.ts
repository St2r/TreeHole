type TCls = {
  [key: string]: boolean;
}

export function cls(props: TCls): string {
  const res = [];
  for (const propsKey in props) {
    if (props.hasOwnProperty(propsKey) && props[propsKey] === true) {
      res.push(propsKey);
    }
  }

  return res.join('');
}
