"use client"

import useBrailleStore from "@/stores/braille";
import { useEffect } from "react";
import './style.scss';

export default function InputBraille() {
  const { dots, setDots } = useBrailleStore();
  function checking(n: number) {
    setDots(dots.map((v, i) => i === n ? !v : v));
  }
  return <div className="board">
    <div>
      <input type="checkbox" checked={dots[0]} onChange={e => checking(0)} />
      <input type="checkbox" checked={dots[1]} onChange={e => checking(1)} />
    </div>
    <div>
      <input type="checkbox" checked={dots[2]} onChange={e => checking(2)} />
      <input type="checkbox" checked={dots[3]} onChange={e => checking(3)} />
    </div>
    <div>
      <input type="checkbox" checked={dots[4]} onChange={e => checking(4)} />
      <input type="checkbox" checked={dots[5]} onChange={e => checking(5)} />
    </div>
  </div>
}