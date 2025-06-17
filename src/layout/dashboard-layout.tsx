import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";

interface DashboardLayoutProps {
    children: React.ReactNode;
    title: string;
}

const DashboardLayout = ({children, title}: DashboardLayoutProps) => {
    return(
        <div className="flex flex-col min-h-screen bg-gray-50">
            <div className="ml-20">
                <Navbar title={title} />
                <main className="p-6 overflow-auto">
                    {children}
                </main>
            </div>
            <Sidebar />
        </div>
    )
}

export default DashboardLayout;