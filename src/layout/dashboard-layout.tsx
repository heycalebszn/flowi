import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";

const DashboardLayout = ({children}: any) => {
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;