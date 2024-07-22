"use client"

import useBrailleStore from "@/stores/braille";
import { useEffect, useState } from "react";
import './style.scss';

export default function Converted() {
  const { dots } = useBrailleStore();
  const [converted, setConverted] = useState<string>('Gap');
  function filtering(arr: number[]): boolean {
    let list = [false, false, false, false, false, false];
    for (let i = 0; i < arr.length; i++) {
      list[arr[i] - 1] = true;
    }
    return (list[0] === dots[0]) && (list[1] === dots[1]) && (list[2] === dots[2]) && (list[3] === dots[3]) && (list[4] === dots[4]) && (list[5] === dots[5]);
  }
  useEffect(() => {
    if (filtering([])) {
      setConverted('Gap');
    }
    else if (filtering([1])) {
      setConverted('A, a, 1, 종성 ㄱ');
    }
    else if (filtering([2])) {
      setConverted('초성 ㄱ');
    }
    else if (filtering([3])) {
      setConverted('종성 ㄹ');
    }
    else if (filtering([4])) {
      setConverted('초성 ㄹ');
    }
    else if (filtering([5])) {
      setConverted('종성 ㅅ');
    }
    else if (filtering([6])) {
      setConverted('Capital Sign, 초성 ㅅ, 된소리');
    }
    else if (filtering([1, 2])) {
      setConverted('C, c, 3, 초성 ㄴ');
    }
    else if (filtering([1, 3])) {
      setConverted('B, b, 2, 종성 ㅂ');
    }
    else if (filtering([1, 4])) {
      setConverted('E, e, 5');
    }
    else if (filtering([1, 5])) {
      setConverted('K, k, 초성 ㅈ');
    }
    else if (filtering([2, 3])) {
      setConverted('I, i, 9, 초성 ㄷ');
    }
    else if (filtering([2, 4])) {
      setConverted('초성 ㅂ');
    }
    else if (filtering([2, 6])) {
      setConverted('초성 ㅈ');
    }
    else if (filtering([3, 4])) {
      setConverted('종성 ㄴ');
    }
    else if (filtering([3, 5])) {
      setConverted('종성 ㅊ');
    }
    else if (filtering([4, 6])) {
      setConverted('초성 ㅊ');
    }
    else if (filtering([4, 5])) {
      setConverted('종성 ㄷ');
    }
    else if (filtering([1, 2, 3])) {
      setConverted('F, f, 6, 초성 ㅋ');
    }
    else if (filtering([1, 2, 4])) {
      setConverted('D, d, 4, 초성 ㅍ');
    }
    else if (filtering([1, 2, 5])) {
      setConverted('M, m');
    }
    else if (filtering([1, 3, 4])) {
      setConverted('H, h, 8, 초성 ㅌ');
    }
    else if (filtering([1, 3, 5])) {
      setConverted('L, l');
    }
    else if (filtering([1, 4, 5])) {
      setConverted('O, o');
    }
    else if (filtering([1, 5, 6])) {
      setConverted('U, u');
    }
    else if (filtering([2, 3, 4])) {
      setConverted('J, j, 0, 초성 ㅎ');
    }
    else if (filtering([2, 3, 5])) {
      setConverted('S, s');
    }
    else if (filtering([3, 4, 5])) {
      setConverted('종성 ㅋ');
    }
    else if (filtering([3, 4, 6])) {
      setConverted('종성 ㅍ');
    }
    else if (filtering([3, 5, 6])) {
      setConverted('종성 ㅌ');
    }
    else if (filtering([4, 5, 6])) {
      setConverted('종성 ㅎ');
    }
    else if (filtering([1, 2, 3, 4])) {
      setConverted('G, g, 7');
    }
    else if (filtering([1, 2, 3, 5])) {
      setConverted('P, p');
    }
    else if (filtering([1, 2, 4, 5])) {
      setConverted('N, n');
    }
    else if (filtering([1, 2, 5, 6])) {
      setConverted('X, x');
    }
    else if (filtering([1, 3, 4, 5])) {
      setConverted('R, r');
    }
    else if (filtering([1, 3, 5, 6])) {
      setConverted('V, v');
    }
    else if (filtering([1, 4, 5, 6])) {
      setConverted('Z, z');
    }
    else if (filtering([2, 3, 4, 5])) {
      setConverted('T, t');
    }
    else if (filtering([2, 3, 4, 6])) {
      setConverted('W, w');
    }
    else if (filtering([3, 4, 5, 6])) {
      setConverted('ㅇ');
    }
    else if (filtering([1, 2, 4, 5, 6])) {
      setConverted('Y, y');
    }
    else if (filtering([1, 2, 3, 4, 5])) {
      setConverted('Q, q');
    }
    else {
      setConverted('Unknown');
    }
  }, [dots])
  return <textarea value={converted} readOnly></textarea>
}