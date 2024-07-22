import Converted from '@/component/converted/converted';
import InputBraille from '@/component/input_braille/input_braille';
import React from 'react';
import './style.scss';
export default function App() {
  return <main>
    <InputBraille />
    <Converted />
  </main>
}