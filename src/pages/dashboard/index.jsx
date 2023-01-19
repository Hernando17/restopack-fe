import { lazy } from 'react';
import { Card } from '../../components';
import { DashboardLayout } from '../layout';
import { useGetAllTableQuery } from '../../redux/services/tableApi';
import ContentLoader from "react-content-loader"

export default function Dashboard() {

    const { data, isLoading } = useGetAllTableQuery();

    return (
        <DashboardLayout title="RestoPack | Dashboard">
            <div className="flex gap-4 flex-wrap">
                <Card>
                    {
                        isLoading ? (
                            <ContentLoader
                                speed={2}
                                width={200}
                                height={160}
                                viewBox="0 0 300 200"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                            >
                                <rect x="22" y="8" rx="0" ry="0" width="112" height="15" />
                                <rect x="22" y="35" rx="0" ry="0" width="219" height="78" />
                            </ContentLoader>
                        ) : (
                            <div className="px-5 py-3 min-w-[200px]">
                                <h1 className="text-lg">Order</h1>
                                <h5 className="text-[32px] font-semibold">10</h5>
                            </div>
                        )
                    }


                </Card>
                <Card>
                    <div className="px-5 py-3 min-w-[200px]">
                        <h1 className="text-lg">Active Waitress</h1>
                        <h5 className="text-[32px] font-semibold">20</h5>
                    </div>
                </Card>
                <Card>
                    {
                        isLoading ? (
                            <ContentLoader
                                speed={2}
                                width={200}
                                height={160}
                                viewBox="0 0 300 200"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                            >
                                <rect x="22" y="8" rx="0" ry="0" width="112" height="15" />
                                <rect x="22" y="35" rx="0" ry="0" width="219" height="78" />
                            </ContentLoader>
                        ) : (
                            <div className="px-5 py-3 min-w-[200px]">
                                <h1 className="text-lg">Available Table</h1>
                                <h5 className="text-[32px] font-semibold">{data.filter((item) => item.isOrdered == false).length}</h5>
                            </div>
                        )}

                </Card>

            </div>
        </DashboardLayout>
    )
}