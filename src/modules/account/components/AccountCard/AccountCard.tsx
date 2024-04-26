"use client";
import { Badge } from "@global/ui/badge";
import { Card } from "@global/ui/card";
import { cn } from "@global/utils/chadcn-utils";
import { useDispatch } from "react-redux";
import {
  STATUS_SHADOW,
  STATUS_TITLES,
  STATUS_BG_COLORS,
  STATUS_BORDER_STYLES,
} from "../../constants/account-status";
import { actions } from "../../store";
import { Account } from "../../types/account-types";

type AccountCardProps = { account: Account };

function AccountCard({ account }: AccountCardProps) {
  const dispatch = useDispatch();

  const { username, status } = account;

  return (
    <>
      <Card
        onClick={clickHandler}
        className={cn(
          "border-gradient-to-bl from-card w-full transition-all duration-200 ease-in rounded-xl hover:cursor-pointer  p-5 h-40 flex justify-center items-center border-border relative border-[1px] z-0 flex-col hover:shadow-none",
          STATUS_BORDER_STYLES[status],
          STATUS_SHADOW[status]
        )}
      >
        <span className="text-muted-foreground text-sm">یوزرنیم :</span>
        <h3 className="text-xl font-medium tracking-wider relative z-20 mb-3">
          {username}
        </h3>
        <span className="text-muted-foreground text-sm mb-1 ">وضعیت :</span>
        <Badge
          className={cn(
            STATUS_BG_COLORS[status],
            "text-card font-light dark:font-medium"
          )}
        >
          {STATUS_TITLES[status]}
        </Badge>
      </Card>
    </>
  );

  function clickHandler() {
    dispatch(
      actions.switchMode({
        mode: false,
        account: {
          email: account.email,
          password: account.password,
          phoneNumber: account.phone,
          status: account.status,
          username: account.username,
          proxy: account.proxy,
          _id: account._id
        },
      })
    );
  }
}

export default AccountCard;
