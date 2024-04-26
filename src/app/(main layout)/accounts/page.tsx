import { Metadata } from "next";
import { getAccountList } from "@account/api/account-api";
import { D_PER_PAGE } from "@global/constants/api-constants";
import AccountCard from "@account/components/AccountCard";
import PaginationWithInput from "@global/components/PaginationWithInput";
import AccountDetailsDialog from "@account/components/AccountDetailsDialog";
import EmptyState from "@/global/components/EmptyState/EmptyState";

export const metadata: Metadata = {
  title: "مدیریت اکانت",
};

type pageProps = { searchParams: { [key: string]: string } };

async function page({ searchParams }: pageProps) {
  const { page = 1, per_page = D_PER_PAGE } = searchParams;
  const { data: accounts, pagination: paginationData } = await getAccountList({
    page: Number(page),
    per_page: Number(per_page),
  });
  return (
    <>
      <section className="mx-auto max-w-screen-2xl">
        {accounts && accounts.length > 0 ? (
                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
                        {accounts.map((account, i) => (
                            <AccountDetailsDialog key={i}>
                                <AccountCard account={account} />
                            </AccountDetailsDialog>
                        ))}
                    </div>
                ) : (
                    <EmptyState title="اکانت" />
                )}
                <PaginationWithInput className="mt-10" basePath="accounts" paginationData={paginationData} />
            </section>
    </>
  );
}

export default page;
