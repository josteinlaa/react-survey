export default function RadiobuttonInput({ header, name, onChange }) {
    return (
        <>
            <div className="form__group radio">
            <h2>{ header }</h2>
            <ul>
            <li>
    <input id={name+"-one"} type="radio" name={name} value="1" onChange={onChange} /><label
      htmlFor={name+"-one"}
      >1</label
    >
  </li>
  <li>
    <input id={name+"-two"} type="radio" name={name} value="2" onChange={onChange} /><label
      htmlFor={name+"-two"}
      >2</label
    >
  </li>
  <li>
    <input id={name+"-three"} type="radio" name={name} value="3" onChange={onChange} /><label
      htmlFor={name+"-three"}
      >3</label
    >
  </li>
  <li>
    <input id={name+"-four"} type="radio" name={name} value="4" onChange={onChange} /><label
      htmlFor={name+"-four"}
      >4</label
    >
  </li>
            </ul>
            </div>
        </>
    )
}