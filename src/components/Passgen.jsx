import styles from './passgen.module.css';
import { useState, useEffect, useRef } from 'react';

function Passgen() {
  const [pass, setpass] = useState('');
  const [lenght, setlenght] = useState(8);
  const [number, setnumber] = useState(false);
  const [special, setspecial] = useState(false);

  let copyref = useRef(null);

  // get random pass
  let random = () => {
    let password = '';
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let spac = '!@#$%^&*()_+{}[]|:;,.<>?/~`';

    if (special) {
      alpha += spac;
    }
    if (number) {
      alpha += num;
    }

    for (let index = 0; index < lenght; index++) {
      let num = Math.floor(Math.random() * alpha.length);
      password += alpha.charAt(num);
    }
    setpass(password);
  };

  let copypass = () => {
    copyref.current?.select();
    window.navigator.clipboard.writeText(pass);
  };

  useEffect(() => {
    random();
  }, [lenght, number, special]);

  return (
    <>
      <div className={styles.maindiv}>
        <div>
          <h1 className={styles.heading}>Password generator</h1>
        </div>

        <div className={styles.textdiv}>
          <div>
            <input
              className={styles.inputtext}
              type="text"
              ref={copyref}
              value={pass}
              readOnly
            />
            <button
              className={styles.inbutton}
              onClick={copypass}
              type="button"
            >
              Copy
            </button>
          </div>

          <div>
            <input
              className={styles.rangetype}
              type="range"
              min={8}
              max={25}
              value={lenght}
              onChange={(e) => {
                setlenght(e.target.value);
              }}
            />
            <label className={styles.lenghtlabel}>{lenght}</label>
          </div>

          <div className={styles.checkbox}>
            <div className={styles.numcheck}>
              <label className={styles.numlable}>Number</label>
              <input
                style={{ cursor: 'pointer' }}
                type="checkbox"
                onChange={() => {
                  setnumber((prev) => !prev);
                }}
              />
            </div>
            <div className={styles.numcheck}>
              <label className={styles.numlable}>Special Character</label>
              <input
                style={{ cursor: 'pointer' }}
                type="checkbox"
                onChange={() => {
                  setspecial((prev) => !prev);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Passgen;
