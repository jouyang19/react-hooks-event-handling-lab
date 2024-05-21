// Code Keypad Component Here

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }
  return (
    <>
      <form>
        <input type="password" name="password" onChange={handleChange}></input>
      </form>
    </>
  );
}

export default Keypad;
