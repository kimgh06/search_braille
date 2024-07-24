import create from 'zustand';

type BrailleState = {
  dots: boolean[][];
  setDots: (dots: boolean[][]) => void;
};

const useBrailleStore = create<BrailleState>((set) => ({
  dots: [[false, false, false, false, false, false]],
  setDots: (dots: boolean[][]) => {
    set({ dots });
  }
}));

export default useBrailleStore;