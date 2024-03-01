import { IconType } from "react-icons/lib";

interface IconBadgeProps {
    Icon: IconType;
};

export const IconBadge = ({
    Icon,
}: IconBadgeProps) => {
    return(
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-gradient-to-r from-transparent via-blue-500  to-transparent shadow-inner mr-2" >
            <Icon className="h-8 w-8 text-white"/>
        </div>
    )
}
