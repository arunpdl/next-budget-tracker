import { PiggyBank } from "lucide-react";

const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" />
      <p className="font-bold text-3xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent leading-tight tracking-tighter">
        BudgetTracker
      </p>
    </a>
  );
};

export const MobileLogo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="font-bold text-3xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent leading-tight tracking-tighter">
        BudgetTracker
      </p>
    </a>
  );
};

export default Logo;
