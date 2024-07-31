"use client"

import useBrailleStore from "@/stores/braille";
import { useEffect, useState } from "react";
import './style.scss';

export default function InputBraille() {
  const { dots, setDots } = useBrailleStore();
  const [cnt, setCnt] = useState<number>(1);
  function checking(index: number, n: number) {
    let newdots = [...dots];
    newdots[index][n] = !newdots[index][n];
    setDots(newdots);
  }
  useEffect(() => {
    let list = [...dots];
    for (let i = 0; i < 3; i++) {
      if (i >= cnt) {
        for (let j = 0; j < 6; j++) {
          list[i][j] = false;
        }
      }
    }
  }, [cnt]);
  return <div className="board">
    {cnt > 1 && <button onClick={() => setCnt(cnt - 1)}>-</button>}
    <div className="boards">
      {[...Array(cnt)].map((i, index) =>
        <div className="oneboard" key={index}>
          <div>
            <input type="checkbox" checked={dots[index][0]} onChange={e => checking(index, 0)} />
            <input type="checkbox" checked={dots[index][1]} onChange={e => checking(index, 1)} />
          </div>
          <div>
            <input type="checkbox" checked={dots[index][2]} onChange={e => checking(index, 2)} />
            <input type="checkbox" checked={dots[index][3]} onChange={e => checking(index, 3)} />
          </div>
          <div>
            <input type="checkbox" checked={dots[index][4]} onChange={e => checking(index, 4)} />
            <input type="checkbox" checked={dots[index][5]} onChange={e => checking(index, 5)} />
          </div>
        </div>)}
    </div>
    {cnt < 3 && <button onClick={() => setCnt(cnt + 1)}>+</button>}
  </div>;
}