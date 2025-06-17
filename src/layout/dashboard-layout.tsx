import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
    title: string;
}

const DashboardLayout = ({children, title}: DashboardLayoutProps) => {
    return(
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar title={title} />

            <div className="flex flex-1">
                <Sidebar />

                <main className="flex-1 p-6 bg-white overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;