import { useState } from "react";

export default function Home() {
  const OPTIONS = {
    CHERRY: {
      value: 2,
      label: "CHERRY",
      icon: "https://cdn-icons-png.flaticon.com/512/218/218362.png",
    },
    APPLE: {
      value: 5,
      label: "APPLE",
      icon: "data:image/png;base64,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",
    },
    ORANGE: {
      value: 10,
      label: "ORANGE",
      icon: "data:image/png;base64,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",
    },
    LEMON: {
      value: 15,
      label: "LEMON",
      icon: "https://cdn-icons-png.flaticon.com/512/6866/6866595.png",
    },
    BELL: {
      value: 20,
      label: "BELL",
      icon: "https://cdn-icons-png.flaticon.com/512/1827/1827272.png",
    },
    WATERMELON: {
      value: 20,
      label: "WATERMELON",
      icon: "https://cdn-icons-png.flaticon.com/512/2224/2224321.png",
    },
    STARS: {
      value: 30,
      label: "STARS",
      icon: "https://cdn-icons-png.flaticon.com/512/6201/6201789.png",
    },
    SEVEN: {
      value: 40,
      label: "SEVEN",
      icon: "data:image/png;base64,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",
    },
    BAR50: {
      value: 50,
      label: "BAR50",
      icon: "https://thumbs.dreamstime.com/b/casino-bar-flat-symbol-isolated-white-black-icon-background-eps-file-available-94172635.jpg",
    },
    BAR100: {
      value: 100,
      label: "BAR100",
      icon: "https://thumbs.dreamstime.com/b/casino-bar-flat-symbol-isolated-white-black-icon-background-eps-file-available-94172635.jpg",
    },
    MORE: {
      value: 0,
      label: "MORE",
      icon: "https://cdn-icons-png.flaticon.com/512/152/152529.png",
    },
  };

  const MENU_OPTIONS = [
    OPTIONS.APPLE,
    OPTIONS.WATERMELON,
    OPTIONS.STARS,
    OPTIONS.SEVEN,
    OPTIONS.BAR100,
    OPTIONS.BELL,
    OPTIONS.LEMON,
    OPTIONS.ORANGE,
    OPTIONS.CHERRY,
  ];

  const [bets, setBets] = useState({
    [OPTIONS.APPLE.label]: 0,
    [OPTIONS.WATERMELON.label]: 0,
    [OPTIONS.STARS.label]: 0,
    [OPTIONS.SEVEN.label]: 0,
    [OPTIONS.BAR100.label]: 0,
    [OPTIONS.BELL.label]: 0,
    [OPTIONS.LEMON.label]: 0,
    [OPTIONS.ORANGE.label]: 0,
    [OPTIONS.CHERRY.label]: 0,
  });

  function handleBetsChange(option: string, e: any) {
    setBets({ ...bets, [option]: e.target.value });
  }

  function resetBets() {
    setBets({
      [OPTIONS.APPLE.label]: 0,
      [OPTIONS.WATERMELON.label]: 0,
      [OPTIONS.STARS.label]: 0,
      [OPTIONS.SEVEN.label]: 0,
      [OPTIONS.BAR100.label]: 0,
      [OPTIONS.BELL.label]: 0,
      [OPTIONS.LEMON.label]: 0,
      [OPTIONS.ORANGE.label]: 0,
      [OPTIONS.CHERRY.label]: 0,
    });
  }

  const SCREEN_TEMPLATE = [
    [
      OPTIONS.ORANGE,
      OPTIONS.BELL,
      OPTIONS.BAR50,
      OPTIONS.BAR100,
      OPTIONS.APPLE,
      OPTIONS.CHERRY,
      OPTIONS.LEMON,
    ],
    [OPTIONS.CHERRY, null, null, null, null, null, OPTIONS.WATERMELON],
    [OPTIONS.APPLE, null, null, null, null, null, OPTIONS.CHERRY],
    [OPTIONS.MORE, null, null, null, null, null, OPTIONS.MORE],
    [OPTIONS.CHERRY, null, null, null, null, null, OPTIONS.APPLE],
    [OPTIONS.STARS, null, null, null, null, null, OPTIONS.CHERRY],
    [
      OPTIONS.LEMON,
      OPTIONS.CHERRY,
      OPTIONS.APPLE,
      OPTIONS.SEVEN,
      OPTIONS.CHERRY,
      OPTIONS.BELL,
      OPTIONS.ORANGE,
    ],
  ];
  const MATRIX_LENGTH = SCREEN_TEMPLATE.length - 1;
  const [selected, setSelected] = useState({ rowIndex: 4, colIndex: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [prize, setPrize] = useState(0);

  let selectedColIndex = 0;
  let selectedRowIndex = 4;
  let counter = 0;

  function play() {
    const randomNumber = Math.floor(Math.random() * (200 - 100 + 1) + 100);
    // console.log(randomNumber);
    setIsPlaying(true);

    const interval = setInterval(() => {
      counter++;
      selectedRowIndex =
        selectedColIndex === 0 && selectedRowIndex !== 0
          ? selectedRowIndex - 1
          : selectedRowIndex < MATRIX_LENGTH &&
            selectedColIndex === MATRIX_LENGTH
          ? selectedRowIndex + 1
          : selectedRowIndex;
      selectedColIndex =
        selectedRowIndex === 0 && selectedColIndex < MATRIX_LENGTH
          ? selectedColIndex + 1
          : selectedRowIndex === MATRIX_LENGTH && selectedColIndex > 0
          ? selectedColIndex - 1
          : selectedColIndex;

      setSelected({
        rowIndex: selectedRowIndex,
        colIndex: selectedColIndex,
      });

      if (counter == randomNumber) {
        clearInterval(interval);
        counter = 0;
        setIsPlaying(false);
        setTimeout(() => {
          computePrize(SCREEN_TEMPLATE[selectedRowIndex][selectedColIndex]);
        });
      }
    }, 20);
  }

  function computePrize(selectedOption: any): void {
    if (selectedOption) {
      // if prize is bar we have 2 options
      if (selectedOption.label === OPTIONS.MORE.label) {
        console.log(selectedOption.label);
        const timeout = setTimeout(() => {
          play();
          clearTimeout(timeout);
        }, 1000);
        return;
      }
      if (
        [OPTIONS.BAR100.label, OPTIONS.BAR50.label].includes(
          selectedOption.label
        )
      ) {
        console.log(
          selectedOption.label,
          selectedOption.value * bets[OPTIONS.BAR100.label]
        );
        setPrize(selectedOption.value * bets[OPTIONS.BAR100.label]);
      } else {
        console.log(
          selectedOption.label,
          selectedOption.value * bets[selectedOption.label]
        );
        setPrize(selectedOption.value * bets[selectedOption.label]);
      }
    }
  }

  return (
    <div className="flex flex-wrap p-8">
      <div className="w-2/3 px-8">
        {SCREEN_TEMPLATE.map((row, rowIndex) => (
          <div className="flex flex-wrap" key={`row-${rowIndex}`}>
            {row.map((col, colIndex) => (
              <div className="w-1/7" key={`col-${colIndex}`}>
                {col && (
                  <div
                    className={`p-2 border border-black relative ${
                      rowIndex === selected.rowIndex &&
                      colIndex === selected.colIndex &&
                      "bg-red-200"
                    }`}
                  >
                    <img className="mx-auto h-16" src={col.icon} />
                    {[OPTIONS.BAR100.label, OPTIONS.BAR50.label].includes(
                      col.label
                    ) && (
                      <div className="text-center absolute bottom-0 right-2 text-red-600 text-bold text-2xl">
                        {col.value}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="flex flex-wrap mt-8">
          {MENU_OPTIONS.map((option, optionIndex) => (
            <div className="w-1/9" key={optionIndex}>
              <div className="p-2 border border-black">
                <div className="text-center font-bold">{option.value}</div>
                <img className="mx-auto w-1/2" src={option.icon} />
              </div>
              <div>
                <input
                  type="number"
                  className="w-full text-center text-2xl pl-4 text-red-400 bg-black"
                  value={bets[option.label]}
                  onChange={(e) => handleBetsChange(option.label, e)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-right py-4">
          <button
            className="bg-gray-500 text-white font-bold px-8 py-4 rounded mr-4"
            onClick={resetBets}
          >
            RESET
          </button>
          <button
            className="bg-blue-500 text-white font-bold px-8 py-4 rounded disabled:text-blue-300"
            disabled={isPlaying}
            onClick={play}
          >
            PLAY
          </button>
        </div>
      </div>
      <div className="w-1/3">
        PRIZE: {prize}
        <br />
        row: {selected.rowIndex}
        <br />
        col: {selected.colIndex}
      </div>
    </div>
  );
}
