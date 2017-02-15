const helloWorld = () => {
  // (Hello World!(
  const contents = helloWorld.toString();
  const sep = contents.charAt();
  let junka = false;
  let junkb = false;
  for (s of contents.split(sep)) {
  	if (!junka) { junka = true; continue; }
    if (!junkb) { junkb = true; continue; }
    return s;
  }
};