"use client"

import useBrailleStore from "@/stores/braille";
import { useEffect, useState } from "react";
import './style.scss';

export default function InputBraille() {
  const { dots, setDots } = useBrailleStore();
  const [cnt, setCnt] = useState<number>(1);
  function checking(index: number, n: number) {
    // setDots(dots.map((v, i) => v.map((v, i) => i === n ? !v : v)));
    let newdots = [...dots];
    newdots[index][n] = !newdots[index][n];
    setDots(newdots);
  }
  return <>
    { }
    <div className="board">
      <div>
        <input type="checkbox" checked={dots[0][0]} onChange={e => checking(0, 0)} />
        <input type="checkbox" checked={dots[0][1]} onChange={e => checking(0, 1)} />
      </div>
      <div>
        <input type="checkbox" checked={dots[0][2]} onChange={e => checking(0, 2)} />
        <input type="checkbox" checked={dots[0][3]} onChange={e => checking(0, 3)} />
      </div>
      <div>
        <input type="checkbox" checked={dots[0][4]} onChange={e => checking(0, 4)} />
        <input type="checkbox" checked={dots[0][5]} onChange={e => checking(0, 5)} />
      </div>
    </div>
  </>;
}