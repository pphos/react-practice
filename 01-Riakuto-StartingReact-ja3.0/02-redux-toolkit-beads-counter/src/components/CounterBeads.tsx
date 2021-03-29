import React from "react";

const range = (n: number): number[] => n < 0 ? [] : Array.from(Array(n), (_, i) => i);

const BEADS_COLORS = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const CounterBeads: React.FC<{ count?: number }> = ({ count = 0}) => {
  return (
    <div className="grid grid-cols-10 justify-items-center mt-5">
      {range(count).map((n: number) => {
        return (
          <div
            className={`rounded-full h-8 w-8 bg-${BEADS_COLORS[n % BEADS_COLORS.length]}-500 mb-1`}
            key={n}
          ></div>
        );
      })}
    </div>
  );
};

export default CounterBeads;
