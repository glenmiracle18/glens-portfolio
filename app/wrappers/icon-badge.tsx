import { IconType } from "react-icons/lib";

interface IconBadgeProps {
  Icon: IconType;
}

export const IconBadge = ({ Icon }: IconBadgeProps) => {
  return (
    <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-gradient-to-r from-transparent  via-blue-500 to-transparent shadow-inner">
      <Icon className="h-8 w-8 text-white" />
    </div>
  );
};
