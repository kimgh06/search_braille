"use client"

import useBrailleStore from "@/stores/braille";
import { useEffect, useState } from "react";
import './style.scss';

export default function Converted() {
  const { dots } = useBrailleStore();
  const [converted, setConverted] = useState<string>('Gap');
  function filtering(index: number, arr: number[]): boolean {
    let list = [
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false]
    ];
    for (let i = 0; i < arr.length; i++) {
      list[index][arr[i] - 1] = true;
    }
    return (list[index][0] === dots[index][0]) && (list[index][1] === dots[index][1]) && (list[index][2] === dots[index][2]) && (list[index][3] === dots[index][3]) && (list[index][4] === dots[index][4]) && (list[index][5] === dots[index][5]);
  }
  useEffect(() => {
    if (filtering(0, [6]) && filtering(1, [6]) && filtering(2, [6])) {
      setConverted('말줄임표')
    }
    else if (filtering(0, [1, 2, 5]) && filtering(1, [1, 3, 4, 5])) {
      setConverted('ㅟ')
    }
    else if (filtering(0, [2, 4, 5]) && filtering(1, [1, 3, 4, 5])) {
      setConverted('ㅒ')
    }
    else if (filtering(0, [1, 3, 5, 6]) && filtering(1, [1, 3, 4, 5])) {
      setConverted('ㅙ')
    }
    else if (filtering(0, [1, 2, 3, 5]) && filtering(1, [1, 3, 4, 5])) {
      setConverted('ㅞ')
    }
    else if (filtering(0, [1]) && filtering(1, [2, 3, 5])) {
      setConverted('그래서')
    }
    else if (filtering(0, [1]) && filtering(1, [1, 2])) {
      setConverted('그러나')
    }
    else if (filtering(0, [1]) && filtering(1, [3, 4])) {
      setConverted('그러면')
    }
    else if (filtering(0, [1]) && filtering(1, [3, 6])) {
      setConverted('그러므로')
    }
    else if (filtering(0, [1]) && filtering(1, [1, 2, 4, 5])) {
      setConverted('그런데')
    }
    else if (filtering(0, [1]) && filtering(1, [1, 5, 6])) {
      setConverted('그리고')
    }
    else if (filtering(0, [1]) && filtering(1, [1, 4, 6])) {
      setConverted('그리하여')
    }
    else if (filtering(0, [6]) && filtering(1, [3, 5, 6])) {
      setConverted('열린 \'')
    }
    else if (filtering(0, [4, 5, 6]) && filtering(1, [5])) {
      setConverted('닫힌 \'')
    }
    else if (filtering(0, [5, 6]) && filtering(1, [5, 6])) {
      setConverted('~')
    }
    else if (filtering(0, [4]) && filtering(1, [3])) {
      setConverted(':')
    }
    else if (filtering(0, [4, 6]) && filtering(1, [3, 5])) {
      setConverted(';')
    }
    else if (filtering(0, [6]) && filtering(1, [5, 6])) {
      setConverted('밑줄 시작')
    }
    else if (filtering(0, [5, 6]) && filtering(1, [5])) {
      setConverted('밑줄 종료')
    }
    else if (filtering(0, [4, 5]) && filtering(1, [4, 5])) {
      setConverted('※')
    }
    else if (filtering(0, [])) {
      setConverted('Gap');
    }
    else if (filtering(0, [1])) {
      setConverted('A, a, 1, 종성 ㄱ');
    }
    else if (filtering(0, [2])) {
      setConverted('초성 ㄱ');
    }
    else if (filtering(0, [3])) {
      setConverted('(,), 종성 ㄹ');
    }
    else if (filtering(0, [4])) {
      setConverted('(,), 초성 ㄹ');
    }
    else if (filtering(0, [5])) {
      setConverted('(.), 종성 ㅅ');
    }
    else if (filtering(0, [6])) {
      setConverted('Capital Sign, 초성 ㅅ, 된소리');
    }
    else if (filtering(0, [1, 2])) {
      setConverted('C, c, 3, 초성 ㄴ, 나');
    }
    else if (filtering(0, [1, 3])) {
      setConverted('B, b, 2, 종성 ㅂ');
    }
    else if (filtering(0, [1, 4])) {
      setConverted('E, e, 5, ㅁ, 마');
    }
    else if (filtering(0, [1, 5])) {
      setConverted('K, k, 초성 ㅈ');
    }
    else if (filtering(0, [1, 6])) {
      setConverted('(×), 연')
    }
    else if (filtering(0, [2, 3])) {
      setConverted('I, i, 9, 초성 ㄷ, 다');
    }
    else if (filtering(0, [2, 4])) {
      setConverted('초성 ㅂ, 바');
    }
    else if (filtering(0, [2, 5])) {
      setConverted('ㅖ, 받침 ㅆ, 두 번 반복 (÷)')
    }
    else if (filtering(0, [2, 6])) {
      setConverted('초성 ㅈ, 자');
    }
    else if (filtering(0, [3, 4])) {
      setConverted('종성 ㄴ, 두번 반복 (=)');
    }
    else if (filtering(0, [3, 5])) {
      setConverted('종성 ㅊ');
    }
    else if (filtering(0, [3, 6])) {
      setConverted('종성 ㅁ, (+)')
    }
    else if (filtering(0, [4, 5])) {
      setConverted('(-), 종성 ㄷ');
    }
    else if (filtering(0, [4, 6])) {
      setConverted('초성 ㅊ');
    }
    else if (filtering(0, [5, 6])) {
      setConverted('(-), 소괄호 표기 ()')
    }
    else if (filtering(0, [1, 2, 3])) {
      setConverted('F, f, 6, 초성 ㅋ, 카');
    }
    else if (filtering(0, [1, 2, 4])) {
      setConverted('D, d, 4, 초성 ㅍ, 파');
    }
    else if (filtering(0, [1, 2, 5])) {
      setConverted('M, m, ㅜ');
    }
    else if (filtering(0, [1, 2, 6])) {
      setConverted('ㅠ')
    }
    else if (filtering(0, [1, 3, 4])) {
      setConverted('H, h, 8, 초성 ㅌ, 타');
    }
    else if (filtering(0, [1, 3, 5])) {
      setConverted('L, l, 사');
    }
    else if (filtering(0, [1, 3, 6])) {
      setConverted('ㅏ')
    }
    else if (filtering(0, [1, 4, 5])) {
      setConverted('O, o, ㅣ');
    }
    else if (filtering(0, [1, 4, 6])) {
      setConverted('ㅕ')
    }
    else if (filtering(0, [1, 5, 6])) {
      setConverted('U, u, ㅗ');
    }
    else if (filtering(0, [2, 3, 4])) {
      setConverted('J, j, 0, 초성 ㅎ, 하');
    }
    else if (filtering(0, [2, 3, 5])) {
      setConverted('S, s, ㅓ, 것');
    }
    else if (filtering(0, [2, 3, 6])) {
      setConverted('ㅡ')
    }
    else if (filtering(0, [2, 4, 5])) {
      setConverted('ㅑ')
    }
    else if (filtering(0, [2, 4, 6])) {
      setConverted('것')
    }
    else if (filtering(0, [2, 5, 6])) {
      setConverted('ㅛ')
    }
    else if (filtering(0, [3, 4, 5])) {
      setConverted('종성 ㅋ, (!)');
    }
    else if (filtering(0, [3, 4, 6])) {
      setConverted('종성 ㅍ, (.)');
    }
    else if (filtering(0, [3, 5, 6])) {
      setConverted('종성 ㅌ, 열림 ("), (?)');
    }
    else if (filtering(0, [4, 5, 6])) {
      setConverted('로마자 시작, 종성 ㅎ, 닫힘 (")');
    }
    else if (filtering(0, [1, 2, 3, 4])) {
      setConverted('G, g, 7, 운');
    }
    else if (filtering(0, [1, 2, 3, 5])) {
      setConverted('P, p');
    }
    else if (filtering(0, [1, 2, 3, 6])) {
      setConverted('가')
    }
    else if (filtering(0, [1, 2, 4, 5])) {
      setConverted('N, n, ㅔ');
    }
    else if (filtering(0, [1, 2, 4, 6])) {
      setConverted('억')
    }
    else if (filtering(0, [1, 2, 5, 6])) {
      setConverted('X, x, 옥');
    }
    else if (filtering(0, [1, 3, 4, 5])) {
      setConverted('R, r');
    }
    else if (filtering(0, [1, 3, 4, 6])) {
      setConverted('열')
    }
    else if (filtering(0, [1, 3, 5, 6])) {
      setConverted('V, v, ㅘ,');
    }
    else if (filtering(0, [1, 4, 5, 6])) {
      setConverted('Z, z, 은');
    }
    else if (filtering(0, [2, 3, 4, 5])) {
      setConverted('T, t, 얼');
    }
    else if (filtering(0, [2, 3, 4, 6])) {
      setConverted('W, w, ㅢ');
    }
    else if (filtering(0, [2, 3, 5, 6])) {
      setConverted('을')
    }
    else if (filtering(0, [2, 4, 5, 6])) {
      setConverted('Number sign')
    }
    else if (filtering(0, [3, 4, 5, 6])) {
      setConverted('ㅇ');
    }
    else if (filtering(0, [1, 2, 4, 5, 6])) {
      setConverted('Y, y, ㅚ');
    }
    else if (filtering(0, [1, 2, 3, 4, 5])) {
      setConverted('Q, q, 인');
    }
    else if (filtering(0, [1, 2, 3, 4, 6])) {
      setConverted('영')
    }
    else if (filtering(0, [1, 2, 3, 5, 6])) {
      setConverted('울')
    }
    else if (filtering(0, [1, 3, 4, 5, 6])) {
      setConverted('온')
    }
    else if (filtering(0, [2, 3, 4, 5, 6])) {
      setConverted('언')
    }
    else if (filtering(0, [1, 2, 3, 4, 5, 6])) {
      setConverted('옹')
    }
    else {
      setConverted('Unknown');
      console.log(dots);
    }
  }, [dots])
  return <textarea value={converted} readOnly></textarea>
}