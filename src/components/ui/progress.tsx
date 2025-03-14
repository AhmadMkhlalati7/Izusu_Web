import { cn } from "@/lib/utils";

interface ProgressBarProps extends React.ComponentPropsWithoutRef<"div"> {
  progress: number;
  showText?: boolean;
}

const ProgressBar = ({ progress, className, showText }: ProgressBarProps) => {
  return (
    <div className="h-2 relative">
      <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-200 rounded-full"></div>
      <div
        style={{
          width: `${progress}%`,
        }}
        className={cn(
          "absolute top-0 bottom-0 left-0 h-full transition-all duration-150 bg-purple-500 rounded-full",
          className
        )}
      ></div>
      <div className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-full h-full">
        {showText && (
          <span className="text-black bg-slate-200 px-0.5 rounded-sm font-medium text-[9px]">
            {progress.toFixed(2)}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
