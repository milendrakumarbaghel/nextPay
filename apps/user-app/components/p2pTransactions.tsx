import { Card } from "@repo/ui/card";


export const P2PTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        status: string,
        to: string
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent P2P Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>;
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactions.map((t, index) => (
                <div key={index} className="flex justify-between">
                    <div>
                        <div className="text-sm">
                            Sent Rs {t.amount / 100}
                        </div>
                        <div className="text-slate-600 text-xs">
                            {t.time.toDateString()}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        To {t.to}
                    </div>
                </div>
            ))}
        </div>
    </Card>;
}
