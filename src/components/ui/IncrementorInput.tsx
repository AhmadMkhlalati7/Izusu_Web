import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  symbol?: string;
}

const IncrementorInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ symbol, className, ...props }, ref) => {
    const [hitMax, setHitMax] = React.useState(false);
    const [hitMin, setHitMin] = React.useState(false);
    const incrementInput = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => incrementInput.current!, []);

    const increment = () => {
      incrementInput.current?.stepUp();
      // Supports onchange events
      incrementInput.current?.dispatchEvent(
        new Event("change", { bubbles: true }),
      );
      // Disbale when hitting max
      setHitMax(incrementInput.current?.value === incrementInput.current?.max);
      setHitMin(incrementInput.current?.value === incrementInput.current?.min);
    };

    const decrement = () => {
      incrementInput.current?.stepDown();
      // Supports onchange events
      incrementInput.current?.dispatchEvent(
        new Event("change", { bubbles: true }),
      );
      // Disbale when hitting min
      setHitMax(incrementInput.current?.value === incrementInput.current?.max);
      setHitMin(incrementInput.current?.value === incrementInput.current?.min);
    };

    return (
      <div className="flex items-center rounded shadow">
        <Button
          type="button"
          size={"sm"}
          disabled={hitMax}
          onClick={increment}
          aria-label="increase"
          variant={"ghost"}
          className="w-8 border border-red-600"
        >
          <Plus className="h-4 w-4" />
        </Button>

        <div className="relative">
          <Input
            type="number"
            className={cn(
              "no-steps w-fit border-0 bg-transparent p-0 pr-4 text-center shadow-none",
              className,
            )}
            ref={incrementInput}
            {...props}
          />
          {symbol && <span className="absolute right-4 top-0">{symbol}</span>}
        </div>

        <Button
          type="button"
          size={"sm"}
          disabled={hitMin}
          onClick={decrement}
          aria-label="decrease"
          variant={"ghost"}
          className="w-8 border border-red-600"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>
    );
  },
);
IncrementorInput.displayName = "IncrementorInput";

export { IncrementorInput };
