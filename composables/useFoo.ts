export function useFoo() {
  const name = useState("key", () => "this is the default name");
  
  function setName(newName: string) {
    name.value = newName;
  }

  return {
    name: readonly(name),
    setName
  }
}
